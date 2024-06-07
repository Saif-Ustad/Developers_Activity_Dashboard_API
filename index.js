const express = require('express');
const cors = require('cors');
const app = express();

const data = require('./data.json');

// Use the CORS middleware
app.use(cors());

app.get('/api/data', (req, res) => {
  res.json(data);
});

const port =  process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
