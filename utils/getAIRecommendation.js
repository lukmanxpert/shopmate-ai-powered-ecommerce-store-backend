export async function getAIRecommendation(req, res, userPrompt, products) {
  const API_KEY = process.env.GEMINI_API_KEY;
  const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

  try {
    const geminiPrompt = `
        Here is a list of available products:
        ${JSON.stringify(products, null, 2)}

        Based on the following user request, filter and suggest the best matching products:
        "${userPrompt}"

        Return only a valid JSON array of the matching products. Do not include any other text or formatting.
    `;

    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: geminiPrompt }] }],
      }),
    });

    if (!response.ok) {
      return res
        .status(500)
        .json({ success: false, message: `AI API error: ${response.status} ${response.statusText}` });
    }

    const data = await response.json();
    const aiResponseText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";
    const cleanedText = aiResponseText.trim();

    if (!cleanedText) {
      return res
        .status(500)
        .json({ success: false, message: "AI response is empty or invalid." });
    }

    let parsedProducts;
    try {
      parsedProducts = JSON.parse(cleanedText);
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Failed to parse AI response" });
    }
    return { success: true, products: parsedProducts };
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error." });
  }
}
