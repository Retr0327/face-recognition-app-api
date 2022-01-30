import { Router } from "express";
import { handleRegister } from "../controllers/index.js";

const router = Router();

router.post("/", handleRegister);

export { router as register };
