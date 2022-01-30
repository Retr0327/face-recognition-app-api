import { updateEntriesById } from "../services/userService.js";

const handleGetEntries = async (req, res) => {
  try {
    const { id } = req.body;
    const entriesResult = await updateEntriesById(id);

    return res
      .status(200)
      .json({ status: "success", entries: entriesResult[0] });
  } catch (error) {
    console.error("handleGetEntries: ", error);
    return res
      .status(500)
      .json({ status: "failed", msg: "Internal Server Error" });
  }
};

export default handleGetEntries;
