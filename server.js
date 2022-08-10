require("dotenv").config();
const userRoutes = require("./server/routes/users.routes");
const savesRoutes = require("./server/routes/saves.routes");
const express = require("express");
const cookieParser = require("cookie-parser");
const passport = require("./server/config/passport.config");
const app = express();
const PORT = process.env.PORT ?? 8080;
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(express.static(__dirname + "/build"));
app.use("/api/saves", savesRoutes);
app.use("/api/users", userRoutes);

app.get("*", (req, res) => {
  return res.sendFile("/build/index.html", { root: __dirname + "/" });
});
app.listen(PORT, () => {
  console.log("The server is up!");
});
