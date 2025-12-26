const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});

app.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Hello from CI/CD Pipeline!', version: '1.0.0' });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
  });
}

module.exports = app;
