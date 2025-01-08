const express = require('express');

const app = express();

//Middleware 
const cors = require('cors');
app.use(cors());


// Define a route for "/api"
app.get("/api", (req, res) => {
    res.json([{ id: 1, name: "Elsa" },
    { id: 2, name: "Julia" },
    { id: 3, name: "Joel" },]); // Send a JSON response for the API endpoint
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});


// Start the server on port 5000
app.listen(5000, () => {
    console.log("Server started at port 5000");
});