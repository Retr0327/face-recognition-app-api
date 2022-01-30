import Clarifai from "clarifai";
import { config } from "dotenv";

config();

const app = new Clarifai.App({
  apiKey: process.env.CLARIFAI_KEY,
});

const handleApiCall = async (req, res) => {
  try {
    const result = await app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      req.body.input
    );

    console.log("api", result);

    return res.status(200).json({ status: "success", data: result });
  } catch (error) {
    console.error("handleApiCall: ", error);
    return res
      .status(400)
      .json({ status: "failed", msg: "Unable to work with API" });
  }
};

export default handleApiCall;
