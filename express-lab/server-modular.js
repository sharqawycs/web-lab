// ========================================
// SERVER WITH MODULAR ROUTING (Step 5)
// ========================================
// This shows how to use api.js to keep code organized

const express = require('express');
const apiRouter = require('./api');
const app = express();
const PORT = 3000;

// ========================================
// MIDDLEWARE
// ========================================

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// ========================================
// USE THE API ROUTER
// ========================================

// All routes from api.js will be prefixed with /api
app.use('/api', apiRouter);

// ========================================
// START SERVER
// ========================================

app.listen(PORT, () => {
  console.log(`🐱 Catbook server (modular) running on http://localhost:${PORT}`);
  console.log(`Try: http://localhost:${PORT}/api/stories`);
});
