import SMART_BRAIN from "../models/smartBrain.js";

async function getUserById(id) {
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

async function getUserByEmail(email) {
  try {
    const result = await SMART_BRAIN.query(
      `SELECT * FROM users
       WHERE email=$1;`,
      [email]
    );

    return result.rows;
  } catch (error) {
    console.error("getUserByEmail: ", error);
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

export { getUserById, createUser, getUserByEmail };
