const Brand = require('../models/brands');

exports.getAllBrands = async (req, res, next) => {
    try {
        const [brands, _] = await Brand.findAll();

        res.status(200).json({count: brands.length, brands})
    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.createNewBrand = async (req, res, next) => {
    try {
        let {brand_name, logo, status} = req.body 
        let brand = new Brand(brand_name, logo, status)

        brand = await brand.save();

        res.status(201).json({ message: "Brand Created"})
    } catch(error) {
        console.log(error);
        next(error);
    }
}

exports.getBrandByName = async (req, res, next) => {
    try {
        let user_name = req.params.name;
        let [brand, _] = await Brand.findByName(user_name);

        res.status(200).json({brand: brand[0]});
    } catch (error) {
        console.log(error);
        next(error);
    }
}