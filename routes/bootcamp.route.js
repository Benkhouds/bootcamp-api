import { Router } from "express";
import BootcampController from "../controllers/bootcamp.controller.js";

const router = Router();

router
  .route("/")
  .get(BootcampController.getAllBootcamps)
  .post(BootcampController.createBootcamp);

router
  .route("/:id")
  .get(BootcampController.getBootcampById)
  .put(BootcampController.editBootcamp)
  .delete(BootcampController.deleteBootcamp);

export default router;
