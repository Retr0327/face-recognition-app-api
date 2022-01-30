import { Router } from "express";

const routes = Router();

routes.post("/", (req, res) => {
    return console.log("Hello world");
});

export default routes;
    
