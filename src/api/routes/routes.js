import { Router } from "express";
// import { handleGetProfile } from "../controllers/index.js";
import { login, register, imageUrl } from "./index.js";

const routes = Router();

routes.use("/login", login);
routes.use("/register", register);
routes.use("/imageUrl", imageUrl);

// routes.get("/profile/:id", handleGetProfile);

export default routes;
