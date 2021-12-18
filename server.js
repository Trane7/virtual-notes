const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;

const express = require('express');
const app = express();

const allNotes = require('./db/db.json');


// Add to its own folder/file down the road to clean up
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());


// Display of notes
app.get('/api/notes', (req, res) => {
    res.json(allNotes.slice(1));
});

//
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

