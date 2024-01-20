const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 1232; // Choose a port for your proxy server

// Define a proxy route for GraphQL requests
app.use('/graphql', createProxyMiddleware({
  target: 'https://leetcode.com',
  changeOrigin: true,
}));

app.listen(port, () => {
  console.log(`Proxy server is running on http://localhost:${port}`);
});
