const express = require('express');
const router = express.Router();

const ProductModel = require('../models/ProductModel.js');

router.post('/add',
    function(req, res) {
        
        let newDocument = {
            "productName": req.body.productName,
            "productType": req.body.productType,
            "brand": req.body.brand,
            "model": req.body.model
        };

        ProductModel
        .create(newDocument)
        // If MongoDB creates document succesfully, then...
        .then(
            function(dbDocument) {
                res.json(dbDocument)
            }
        )
        // Otherwise, if error occurs catch it...
        .catch(
            function(error) {
                console.log('/addproduct error', error);

                res.send('An error occured');
            }
        );
    }
);


router.post('/find',
    function(req, res) {
        ProductModel
        .find(
            { "brand": req.body.brand }
        )
        .then(
            function(dbDocument) {
                res.json(dbDocument)
            }
        )
        .catch(
            function(error) {
                console.log('/findproduct', error);

                res.send('An error occurred');
            }
        )
    }   

);

module.exports = router;