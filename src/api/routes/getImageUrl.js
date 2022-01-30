import { Router } from "express";
import { handleApiCall } from "../controllers/index.js";

const router = Router();

router.post("/", handleApiCall);

export { router as imageUrl };
