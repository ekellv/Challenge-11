// dependencies
const express = require('express');
const path = require('path');

// route to get notes.html

module.exports = (app) => {
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
        return; // stack overflow mentioned adding the return to stop the node module from returning an error but the app still works
    });

    // wildcard route
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
        return; // stack overflow mentioned adding the return to stop the node module from returning an error but the app still works
    })
};
