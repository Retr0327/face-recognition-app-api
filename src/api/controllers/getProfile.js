import { getUserById } from "../services/userService.js";

const handleGetProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getUserById(id);

    return res.status(201).json({ status: "success", data: result[0] });
  } catch (error) {
    console.error("handleGetProfile: ", error);
    return res
      .status(500)
      .json({ status: "failed", msg: "Internal Server Error" });
  }
};

export default handleGetProfile;
