// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

const PORT = 8080;
//pp.get('/', (req, res) => { res.sendFile(__dirname + '/public/index.html'); });
/*
app.listen(8080, () => { console.log(`Server is running on port ${PORT}`); });
app.get('/hello', (req, res) => { res.send('Hello World!'); });
app.get('/hello/:name', (req, res) => { const name = req.params.name; res.send(`Hello ${name}`); });
app.get('/hello-query', (req, res) => { const name = req.query.name; res.send(`Hello ${name}`); });
app.get('/', (req, res) => { res.sendFile(__dirname + '/public/index.html'); });
*/

// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file
    res.sendFile(__dirname + '/public/index.html');
});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response
res.json(pets);
});

// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request
    const owner = req.query.owner;
    // find the pet in the pets array
    const pet = pets.find(pet => pet.owner === owner);

    // send the pet as a response
    res.json(petsByOwner);

});

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request
const name = req.params.name;

    // find the pet in the pets array
    const pet = pets.find(pet => pet.name === name);

    // send the pet as a response
    if (pet) {
        res.json(pet);
    } else {
        res.status(404).send('pet not found')
    }
});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;