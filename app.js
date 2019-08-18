// Global node requires
// Nothing here yet!

// Third-party npm requires
const express = require('express');

// Local requires
// Nothing here yet!

// Spin up the Express app.
const app = express();

// Handle favicon.ico requests by sending a blank response with a 204 (No Content) response code.
app.get('/favicon.ico', (req, res, next) => {
    console.log('Nope, no favicons here! Now amscray!');
    res.status(204).send();
});

// First part of assignment: Create an Express.js app which funnels the
// requests through 2 middleware functions that log something to the console
// and return one response.
app.use((req, res, next) => {
    console.log('It\'s the first middleware function! This one passes the control flow onward.');
    next();
});

app.use((req, res, next) => {
    console.log('It\'s the second middleware function! This one returns the response.');
    res.send();
})

// Begin listening on port 3000.
app.listen(3000);
