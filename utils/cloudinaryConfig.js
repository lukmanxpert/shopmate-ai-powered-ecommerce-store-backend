import { v2 as cloudinary } from "cloudinary";

const cloudName = process.env.CLOUDINARY_CLIENT_NAME;
const cloudApiKey = process.env.CLOUDINARY_CLIENT_API;
const cloudApiSecret = process.env.CLOUDINARY_CLIENT_SECRET;

if (!cloudName || !cloudApiKey || !cloudApiSecret) {
  console.error("Cloudinary configuration missing:", {
    CLOUDINARY_CLIENT_NAME: !!cloudName,
    CLOUDINARY_CLIENT_API: !!cloudApiKey,
    CLOUDINARY_CLIENT_SECRET: !!cloudApiSecret,
  });
  throw new Error(
    "Missing Cloudinary environment variables. Ensure CLOUDINARY_CLIENT_NAME, CLOUDINARY_CLIENT_API and CLOUDINARY_CLIENT_SECRET are set.",
  );
}

cloudinary.config({
  cloud_name: cloudName,
  api_key: cloudApiKey,
  api_secret: cloudApiSecret,
});

export default cloudinary;
