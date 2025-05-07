const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { userId, badge } = req.body;
  console.log(`Received badge for user ${userId}: ${badge}`);
  res.json({ message: "Badge received (no DB yet)" });
});

module.exports = router;
