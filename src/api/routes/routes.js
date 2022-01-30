import { Router } from "express";
import {
  handleRegister,
  handleGetProfile,
  handleLogin,
} from "../controllers/index.js";

const routes = Router();

routes.post("/login", handleLogin);

routes.get("/profile/:id", handleGetProfile);

routes.post("/register", handleRegister);

export default routes;
