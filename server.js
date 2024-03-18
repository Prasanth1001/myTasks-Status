const express = require('express');
const app = express();

// Define a route to serve your file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/todo.html');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
