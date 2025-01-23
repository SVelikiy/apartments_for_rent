import createHttpError from "http-errors";
import {
  getAllApartments,
  createApartment,
  deleteApartment,
  updateApartment,
} from "../services/apartments.js";
import { parsePaginationParams } from "../utils/parsePaginationParams.js";
import { parseSortParams } from "../utils/parseSortParams.js";
import { parseFilterParams } from "../utils/parseFilterParams.js";
import { saveFileToUploadDir } from "../utils/saveFileToUploadDir.js";
import { saveFileToCloudinary } from "../utils/saveFileToCloudinary.js";
import { getEnvVar } from "../utils/getEnvVar.js";
import * as path from "node:path";

export const getAllApartmentsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const filter = parseFilterParams(req.query);
  const data = await getAllApartments({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
  });
  res.json({
    status: 200,
    message: "Successfully found apartments!",
    data,
  });
};

export const createApartmentController = async (req, res) => {
  let photo = null;

  if (req.file) {
    if (getEnvVar("ENABLE_CLOUDINARY") === "true") {
      photo = await saveFileToCloudinary(req.file, "photos");
    } else {
      await saveFileToUploadDir(req.file);
      photo = path.join(req.file.filename);
    }
  }

  const result = await createApartment({
    ...req.body,
    photo,
  });

  res.json({
    status: 201,
    message: "Successfully create apartment!",
    data: result,
  });
};

export const deleteApartmentController = async (req, res, next) => {
  const { id: apartmentId } = req.params;
  const data = await deleteApartment(apartmentId);
  if (!data) {
    next(createHttpError(404, "Apartment not found"));
    return;
  }
  res.json({
    status: 204,
    message: "Successfully delete apartment!",
    data,
  });
};

export const patchApartmentController = async (req, res, next) => {
  const { id: _id } = req.params;
  let photo = null;

  if (req.file) {
    if (getEnvVar("ENABLE_CLOUDINARY") === "true") {
      photo = await saveFileToCloudinary(req.file, "photos");
    } else {
      await saveFileToUploadDir(req.file);
      photo = path.join(req.file.filename);
    }
  }

  const data = await updateApartment({ _id, payload: req.body });
  if (!data) {
    next(createHttpError(404, "Apartment not found"));
    return;
  }

  res.json({
    status: 200,
    message: "Successfully update apartment!",
    data,
  });
};
