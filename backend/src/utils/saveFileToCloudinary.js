import { v2 as cloudinary } from "cloudinary";
import { unlink } from "node:fs/promises";
import { getEnvVar } from "./getEnvVar.js";

const cloud_name = getEnvVar("CLOUDINARY_CLOUD_NAME");
const api_key = getEnvVar("CLOUDINARY_API_KEY");
const api_secret = getEnvVar("CLOUDINARY_API_SECRET");

cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
});

export const saveFileToCloudinary = async (file, folder) => {
  try {
    const responce = await cloudinary.uploader.upload(file.path, {
      folder,
    });
    return responce.secure_url;
  } catch (error) {
    throw error;
  } finally {
    await unlink(file.path);
  }
};
