import { Router } from "express";
import { login, register, imageUrl, image } from "./index.js";

const routes = Router();

routes.use("/login", login);
routes.use("/image", image);
routes.use("/register", register);
routes.use("/imageUrl", imageUrl);

export default routes;
