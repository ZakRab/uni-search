//TODO add a jwt strat
const passport = require("passport");
const { Strategy } = require("passport-jwt");
const query = require("./database.config");

// extract jwt from cookie
function cookieExtractor(req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies.jwt;
  }
  return token;
}
//! set up configuration options
const jwtOptions = {
  secretOrKey: process.env.SECRET_KEY,
  jwtFromRequest: cookieExtractor,
};
//! build strategy
passport.use(
  "jwt",
  new Strategy(jwtOptions, async (payload, done) => {
    const [user] = await query("SELECT * FROM users WHERE id = ?", [
      payload.id,
    ]);
    try {
      if (!user) {
        return done(null, false, "no valid user");
      }
      return done(null, user);
    } catch (error) {
      console.log(error);
      return done(true, false, "something went wrong");
    }
  })
);
module.exports = passport;
