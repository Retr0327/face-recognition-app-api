import SMART_BRAIN from "../models/smartBrain.js";

async function getUserProfileByID(id) {
  try {
    const result = SMART_BRAIN.query(
      `SELECT * FROM users
       WHERE id = $1
      `,
      [id]
    );
    return result.rows;
  } catch (error) {
    console.error("getUserProfileByID: ", error);
  }
}

async function createUser(name, email, password) {
  try {
    const result = await SMART_BRAIN.query(
      `INSERT INTO users (
          user_name, 
          email, 
          password)
       VALUES ($1, $2, $3)
       RETURNING *
      `,
      [name, email, password]
    );
    return result.rows;
  } catch (error) {
    console.error("createUser: ", error);
  }
}

export { getUserProfileByID, createUser };
