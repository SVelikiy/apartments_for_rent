import { Router } from "express";
import {
  getAllApartmentsController,
  createApartmentController,
  deleteApartmentController,
  patchApartmentController,
} from "../controllers/apartments.js";
import ctrlWraper from "../utils/ctrlWraper.js";
import { validateBody } from "../middlewares/validateBody.js";
import {
  apartmentAddSchema,
  apartmentUpdateSchema,
} from "../validation/apartments.js";
import { isValidId } from "../middlewares/isValidId.js";
import { upload } from "../middlewares/multer.js";

const apartmentsRouter = Router();

apartmentsRouter.get("/", ctrlWraper(getAllApartmentsController));

apartmentsRouter.post(
  "/",
  // upload.array("photos", 10),
  validateBody(apartmentAddSchema),
  ctrlWraper(createApartmentController)
);

apartmentsRouter.delete(
  "/:id",
  ctrlWraper(deleteApartmentController)
);

apartmentsRouter.patch(
  "/:id",
  isValidId,
  upload.array("photos", 10),
  validateBody(apartmentUpdateSchema),
  ctrlWraper(patchApartmentController)
);

export default apartmentsRouter;
