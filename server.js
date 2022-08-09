require("dotenv").config();
const userRoutes = require("./server/routes/users.routes");
const savesRoutes = require("./server/routes/saves.routes");
const express = require("express");
const app = express();
const port = process.env.port ?? 8080;
app.use(express.json());
app.use(express.static(__dirname + "/build"));
app.use("/api/saves", savesRoutes);
app.use("/api/users", userRoutes);

app.get("*", (req, res) => {
  return res.sendFile("/build/index.html", { root: __dirname + "/" });
});
``;
app.listen(port, () => {
  console.log("Ther server is up!");
});
