const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

const data = require('./data.json');

// Use the CORS middleware
app.use(cors());

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://Developers_Activity_Dashboard_API.vercel.app:${port}`);
});
