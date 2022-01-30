import { Router } from "express";
import { handleLogin } from "../controllers/index.js";
import loginValidator from "../validations/loginValidation.js";

const router = Router();

router.post("/", loginValidator, handleLogin);

export { router as login };
