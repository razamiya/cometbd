// require module 
const express = require('express');
const {homePage, shoppage, shopSinglepage, } = require('../controller/pageController');


// Router init 
const router = express.Router();


// page Routter 
router.get('/', homePage);
router.get('/shop', shoppage);
router.get('/shop/:id', shopSinglepage);



// export router 
module.exports = router;