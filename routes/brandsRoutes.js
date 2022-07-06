const express = require('express');
const brandControllers = require('../contorllers/brandsControllers');
const router = express.Router();

// @route GET && POST - /brands/
router
    .route("/")
    .get(brandControllers.getAllBrands)
    .post(brandControllers.createNewBrand)

router
    .route("/:name")
    .get(brandControllers.getBrandByName) 

module.exports = router;