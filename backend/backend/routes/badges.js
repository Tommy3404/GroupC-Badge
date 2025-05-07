import express from ('@npm/express');
const cors = require('cors');
const app = express();
const badgesRouter = require('./routes/badges');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("✅ Zachary's Express backend is up!");
});

app.use('/api/badges', badgesRouter);

app.listen(8000, () => {
  console.log('✅ Zachary\'s Express backend running at http://localhost:8000');
});
