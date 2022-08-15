const query = require("../config/database.config");
const bcrypt = require("bcrypt");

async function register(username, password) {
  console.log("trying to register");
  try {
    const [user] = await query("SELECT * FROM users WHERE users.username = ?", [
      username,
    ]);
    if (user) {
      return { success: false, data: null, error: "Username already taken" };
    }
    const hashed = await bcrypt.hash(password, 12);

    await query("INSERT INTO users (password, username) VALUES (?,?) ", [
      hashed,
      username,
    ]);
    console.log("registered");

    return { success: true, data: "successfully registered", error: null };
  } catch (error) {
    return {
      success: false,
      data: null,
      error: "Something went wrong :(",
    };
  }
}

async function login(username, password) {
  try {
    console.log("trying to login from model to db");
    const [user] = await query("SELECT * FROM users WHERE users.username = ?", [
      username,
    ]);
    console.log(user);
    if (!user) {
      return {
        success: false,
        data: null,
        error: "username invalid",
      };
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return { success: false, data: null, error: "Password invalid" };
    }
    return {
      success: true,
      data: { username: user.username, id: user.id },
      error: null,
    };
  } catch (error) {
    console.log(error);
    return { success: false, data: null, error: "Something went wrong :(" };
  }

  // check user with that name exists
  // compare password with hash
  // return info
}

module.exports.login = login;
module.exports.register = register;
