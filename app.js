const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const schoolRoutes = require("./routes/schoolRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/schools", schoolRoutes);

app.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT 1");
    res.send("API + DB working 🚀");
  } catch (error) {
    res.status(500).send("DB connection failed");
  }
});

module.exports = app;