import { GoogleGenerativeAI } from "@google/generative-ai";

export async function getAIRecommendation(req, res, userPrompt, products) {
  const API_KEY = process.env.GEMINI_API_KEY;

  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    
    // Optional: List available models (uncomment to debug)
    // const models = await genAI.listModels();
    // console.log("Available models:", models.data.map(m => m.name));

    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

    const geminiPrompt = `
        Here is a list of available products:
        ${JSON.stringify(products, null, 2)}

        Based on the following user request, filter and suggest the best matching products:
        "${userPrompt}"

        Return only a valid JSON array of the matching products. Do not include any other text or formatting.
    `;

    const result = await model.generateContent(geminiPrompt);
    const response = await result.response;
    const aiResponseText = response.text().trim();

    let cleanedText = aiResponseText;

    // Remove markdown code blocks if present
    if (cleanedText.startsWith('```json')) {
      cleanedText = cleanedText.replace(/^```json\s*/, '').replace(/\s*```$/, '');
    } else if (cleanedText.startsWith('```')) {
      cleanedText = cleanedText.replace(/^```\s*/, '').replace(/\s*```$/, '');
    }

    if (!cleanedText) {
      return { success: false, message: "AI response is empty or invalid." };
    }

    let parsedProducts;
    try {
      parsedProducts = JSON.parse(cleanedText);
      if (!Array.isArray(parsedProducts)) {
        throw new Error("Response is not an array");
      }
    } catch (error) {
      return { success: false, message: "Failed to parse AI response as JSON array" };
    }
    return { success: true, products: parsedProducts };
  } catch (error) {
    return { success: false, message: `AI API error: ${error.message}` };
  }
}
