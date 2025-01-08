const mysql = require('mysql2');

// create a new MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password', // Replace 'password' with your MySQL password
  database: 'boardgame'
});

connection.connect(function(err) {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }

  // Run the query only after the connection is established
  connection.query("SELECT * FROM sellers", function (err, result, fields) {
    if (err) {
      console.error('Error during query execution:', err);
      connection.end();  // Close the connection after query error
      return;
    }

    console.log('Query result:', result);

    // Close the connection after the query has completed
    connection.end(function(endErr) {
      if (endErr) {
        console.error('Error closing the connection:', endErr);
      } else {
        console.log('Connection closed successfully');
      }
    });
  });
});
