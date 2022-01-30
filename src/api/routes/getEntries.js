import { Router } from "express";
import { handleGetEntries } from "../controllers/index.js";

const router = Router();

router.put("/", handleGetEntries);

export { router as image };
