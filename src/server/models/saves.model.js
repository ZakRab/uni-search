const query = require("../config/database.config");

async function add(save) {
  try {
    let { insertId } = await query(
      "INSERT INTO saves (university, user_id, website, country) VALUES (?,?,?,?)",
      [save.university, save.user_id, save.website, save.country]
    );
    return { success: true, data: { ...save, id: insertId }, error: null };
  } catch (err) {
    return { success: false, data: null, error: "Something went wrong" };
  }
}
async function remove(university, user_id) {
  try {
    await query(
      "DELETE FROM saves WHERE saves.university = ? AND saves.user_id = ?)",
      [university.name, user_id]
    );
    return { success: true, data: "deleted successfully", error: null };
  } catch (err) {
    return { success: false, data: null, error: "Something went wrong" };
  }
}
async function getByUser(user_id) {
  try {
    let saves = await query("SELECT * FROM saves WHERE user_id = ? ", [
      user_id,
    ]);
    return { success: true, data: saves, error: null };
  } catch (err) {
    return { success: false, data: null, error: "Something went wrong" };
  }
}

module.exports.add = add;
module.exports.remove = remove;
module.exports.getByUser = getByUser;
