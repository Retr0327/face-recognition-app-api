import { Router } from "express";
import { handleRegister } from "../controllers/index.js";

const routes = Router();

routes.post("/login", (req, res) => {
  return console.log("Hello world");
});

routes.post("/register", handleRegister);

export default routes;
