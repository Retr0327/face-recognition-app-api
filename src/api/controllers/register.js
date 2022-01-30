import bcrypt from "bcrypt";
import { createUser } from "../services/userService.js";

const handleRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const createResult = await createUser(name, email, hashedPassword);
    console.log(createResult);

    
  } catch (error) {
    console.error("handleRegister: ", error);
    return res.status(500).json("Internal Server Error");
  }
};

export default handleRegister;
