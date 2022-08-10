//TODO implemet jwt start in middleware
const passport = require("passport");
async function auth(req, res, next) {
  passport.authenticate("jwt", (err, user, info) => {
    if (err || !user) {
      res.clearCookie("jwt");
      return res.send({ sucess: false, data: null, error: info });
    }
    req.user = user;
    return next();
  });
}
module.exports = auth;
