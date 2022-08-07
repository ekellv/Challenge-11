// dependencies
const express = require('express');
const router = express.Router();
const path = require('path');

// route to get notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// wildcard route
router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;