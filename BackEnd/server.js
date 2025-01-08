const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

// Middleware for handling CORS
app.use(cors());

// Create a new MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password', // Replace with your MySQL password
  database: 'boardgame' // Replace with your MySQL database name
});

// Middleware to check if the database connection is established
connection.connect(function (err) {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database!');
});

// Define a route for "/api" to get sellers from the database
app.get("/api", (req, res) => {
  // Query the database to fetch the sellers
  connection.query("SELECT * FROM sellers", function (err, result, fields) {
    if (err) {
      console.error('Error during query execution:', err);
      res.status(500).json({ error: 'Failed to fetch sellers from the database' });
      return;
    }

    // Send the result as JSON
    res.json(result);
  });
});

// Handle any undefined routes with a 404 error
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start the server on port 5000
app.listen(5000, () => {
  console.log("Server started at port 5000");
});
