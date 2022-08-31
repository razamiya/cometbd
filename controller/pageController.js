// Require all project 
const {readFileSync} = require('fs');
const path = require('path');


// page controller 
const homePage = (req, res) => {

    const slider = readFileSync(path.join(__dirname, '../DB/homeSlider.json'))
    const clients = readFileSync(path.join(__dirname, ('../DB/client.json')));
    const testimonial = readFileSync(path.join(__dirname, ('../DB/tesimonial.json')));
    const blog = readFileSync(path.join(__dirname, ('../DB/blog.json')));

    res.render('index', {

        slider : JSON.parse(slider),
        clients : JSON.parse(clients),
        testimonial : JSON.parse(testimonial),
        blog : JSON.parse(blog)
        
    })
};

// Shop page control
const shoppage = (req, res) => {

     const product = readFileSync(path.join(__dirname, '../DB/product.json'))
    
        res.render('shop', {
            product : JSON.parse(product.toString())
        })
    
}





// shop Single page 
const shopSinglepage = (req, res) => {

    const product = JSON.parse(readFileSync(path.join(__dirname, '../DB/product.json')))
    const singleProduct = product.find(data => data.id == req.params.id)

    res.render('shop-single', {
        singleProduct : singleProduct
    })
}




// module exports
module.exports  = {homePage, shoppage, shopSinglepage}