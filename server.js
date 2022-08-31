// Require all module 
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const ejsLayout = require('express-ejs-layouts');
const pageRouter = require('./router/pageRouter');


// Epress init 
let app = express();


// Json data or From data access 
app.use(express.json());
app.use(express.urlencoded( { extended : false } ));


// Envirenment variable and config
dotenv.config();
const PORT = process.env.SERVER_PORT || 4000;


// stattic folder 
app.use(express.static('public'));


// Init EJS 
app.set('view engine', 'ejs');
app.use(ejsLayout);
app.set('layout', 'temp/app');



// Router 
app.use(pageRouter);


// Listen Server
app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`.bgYellow.black);
})


