import bcrypt from "bcrypt";
import { getUserByEmail } from "../services/userService.js";

const handleLogin = async (req, res) => {
  try {
    const { userEmail, password } = req.body;

    const userInfo = await getUserByEmail(userEmail);

    if (userInfo.length === 0) {
      return res.status(401).json({ status: "failed" });
    }

    const isValidPassword = await bcrypt.compare(
      password,
      userInfo[0].password
    );

    if (!isValidPassword) {
      return res.status(401).json({ status: "failed" });
    }

    const { id, user_name, email, entries, joined } = userInfo[0];

    return res.status(200).json({
      status: "success",
      data: { id, name: user_name, email, entries, joined },
    });
  } catch (error) {
    console.error("handleLogin: ", error);
    return res.status(400).json({ status: "failed", msg: "Wrong Credentials" });
  }
};

export default handleLogin;
