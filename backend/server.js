const express = require('express');
const mysql = require('mysql2/promise');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Configure CORS to allow requests from any origin.
// WARNING: This is only for development and is not secure for production.
// For production, you would specify a list of trusted origins.
app.use(cors());

// You could also explicitly allow localhost, which might resolve the issue
// depending on your browser's behavior, but the wildcard is more robust for a demo.
/*
const corsOptions = {
  origin: 'http://localhost'
};
app.use(cors(corsOptions));
*/


// Connect to the database using environment variables loaded from .env
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

// Simple route to check if the backend is running
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// API endpoint to get all users from the database
app.get('/api/users', async (req, res) => {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);
    console.log('Successfully connected to the database.');

    const [rows] = await connection.execute('SELECT * FROM users');

    res.json(rows);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Failed to fetch users' });
  } finally {
    if (connection) {
      connection.end();
    }
  }
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
