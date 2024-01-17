const express = require('express');
const path = require('path');
const cors = require('cors')

const app = express();
const port = 3001;


app.use(cors())
// Serve static files from the Vite project's dist directory
app.use(express.static(path.join(__dirname, '../my-vite-project/dist')));

app.get('/', (req, res) => {
  // Handle requests for the root route
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});