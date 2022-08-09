const query = require("../config/database.config");
const bcrypt = require("bcrypt");

async function register(username, password) {
  try {
    const [user] = query("SELECT * FROM users WHERE user.username = ?", [
      username,
    ]);
    if (user) {
      return { success: false, data: null, error: "Username alreay taken" };
    }
    const hashed = await bcrypt.hash(password, 12);

    await query("INSERT INTO users (password, username) VALUES (?,?) ", [
      hashed,
      username,
    ]);
    return { success: true, data: "successfully registered", error: null };
  } catch (error) {
    return { success: false, data: null, error: "Something went wrong :(" };
  }

  // ensure the username is unique
  // hash password
  // add it to the database
  // return info about things
}

async function login(username, password) {
  try {
    const [user] = query("SELECT * FROM users WHERE user.username = ?", [
      username,
    ]);
    if (user) {
      return { success: true, data: null, error: null };
    }
    if (!user) {
      return {
        success: false,
        data: null,
        error: "no user with that username",
      };
    }
    const [hashedPassword] = query(
      "SELECT user.password FROM users WHERE user.username = ?",
      [username]
    );
    const match = await bcrypt.compare(password, hashedPassword);
    if (match === false) {
      return { success: false, data: null, error: "Password invalid" };
    }
    return {
      success: true,
      data: { username: user.username, id: user.id },
      error: null,
    };
  } catch (error) {
    return { success: false, data: null, error: "Something went wrong :(" };
  }

  // check user with that name exists
  // compare password with hash
  // return info
}

module.exports.login = login;
module.exports.register = register;
