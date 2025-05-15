// /server/index.js
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors({
  origin: 'http://54.236.88.92:3000'  // frontend origin
}));
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'my_test_db',
  password: 'mypassword',
  port: 5432,
});

// API route to get all users
app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Users ORDER BY user_id');
    console.log("data from query:", result);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.get('/api/records', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Shipment_Records ORDER BY record_id');
    console.log("data from query:", result);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});


// Start the server
const PORT = 3001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
