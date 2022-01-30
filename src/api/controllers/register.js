import bcrypt from "bcrypt";
import { createUser } from "../services/userService.js";

const handleRegister = async (req, res) => {
  try {
    const { name, userEmail, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const createResult = await createUser(name, userEmail, hashedPassword);
    const { id, user_name, email, entries, joined } = createResult[0];

    return res.status(201).json({
      status: "success",
      data: { id, name: user_name, email, entries, joined },
    });
  } catch (error) {
    console.error("handleRegister: ", error);
    return res
      .status(500)
      .json({ status: "failed", msg: "Internal Server Error" });
  }
};

export default handleRegister;
