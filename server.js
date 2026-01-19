import { config as dotenvConfig } from "dotenv";
dotenvConfig();

import "./utils/cloudinaryConfig.js";
import app from "./app.js";

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

