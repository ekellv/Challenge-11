// dependencies
const express = require('express');
const path = require('path');

// route to get notes.html

module.exports = (app) => {
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
        return;
    });

    // wildcard route
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
        return;
    })
};
