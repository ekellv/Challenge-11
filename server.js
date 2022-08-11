// dependencies
const express = require('express');

// express server
const app = express();

// setting the PORT to view the app
const PORT = process.env.PORT || 3001;

// static routing
app.use(express.static('public'));

// parsing data 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route files 
require('./routes/APIroutes')(app); // node modules returns a weird error when doing app.use with the routes, stack overflow recommended linking the route without app.use... the error still occurs but the app is functional linking this way
require('./routes/HTMLroutes')(app);

// // app to use routing files 
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

// starting the server
app.listen(PORT, () => {
    console.log(`Your notes are waiting at http://localhost:${PORT}`);
});