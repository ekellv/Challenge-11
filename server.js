// dependencies
const express = require('express');

// route files 
const apiRoutes = require('./routes/APIroutes');
const htmlRoutes = require('./routes/HTMLroutes');

// express server
const app = express();

// setting the PORT to view the app
const PORT = process.env.PORT || 3001;

// static routing
app.use(express.static('public'));

// parsing data 
app.use(express.urlencoded)({ extended: true });
app.use(express.json());

// app to use routing files 
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// starting the server
app.listen(PORT, () => {
    console.log(`Your notes are waiting at http://localhost:${PORT}`);
});