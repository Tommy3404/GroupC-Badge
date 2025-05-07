const express = require("express");
const app = express();
const PORT = 8000;


app.use(express.json());


app.get("/", (req, res) => {
  res.send("✅ Zachary's Express backend is up!");
});


app.post("/api/badges", (req, res) => {
  const { userId, badge } = req.body;

  if (!userId || !badge) {
    return res.status(400).json({ error: "Missing userId or badge" });
  }

  
  console.log(`Received badge for user ${userId}: ${badge}`);
  res.json({ message: "Badge received (no DB yet)" });
});


app.listen(PORT, () => {
  console.log(`✅ Zachary's Express backend running at http://localhost:${PORT}`);
});
