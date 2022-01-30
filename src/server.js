import cors from "cors";
import express from "express";
import { config } from "dotenv";
import routes from "./api/routes/routes.js";

config();

const PORT = process.env.PORT || 3000;

const app = express();

const whitelist = ["http://localhost:3001", process.env.CLIENT_URL];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
