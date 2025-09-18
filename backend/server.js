const express = require('express');
const mysql = require('mysql2/promise');
// Import the dotenv package to load environment variables from the .env file
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

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
    // Create a database connection
    connection = await mysql.createConnection(dbConfig);
    console.log('Successfully connected to the database.');

    // Execute the query
    const [rows] = await connection.execute('SELECT * FROM users');

    // Send the users as a JSON response
    res.json(rows);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Failed to fetch users' });
  } finally {
    // Ensure the connection is closed
    if (connection) {
      connection.end();
    }
  }
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
