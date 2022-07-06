const db = require('../config/db');

class Product{
    constructor(product_name, brand_name, price, discription, logo, quantity) {
        this.product_name = product_name;
        this.brand_name = brand_name;
        this. price = price;
        this. discription = discription;
        this.logo = logo;
        this.quantity = quantity;
    }
    save() {
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let created_date = `${yyyy}-${mm}-${dd}`

        let sql = `
        INSERT INTO products(
            product_name,
            brand_name,
            price,
            discription,
            logo,
            quantity,
            created_date
        )
        VALUES(
            '${this.product_name}',
            '${this.brand_name}',
            '${this.price}',
            '${this.discription}',
            '${this.logo}',
            '${this.quantity}',
            '${created_date}'
        )`;

        return db.execute(sql);

    }
    static findAll() {
        let sql = "SELECT * FROM products;";

        return db.execute(sql);

    }
    static findByname(name) {
        let sql = `SELECT * FROM products WHERE product_name = ${name};`;

        return db.execute(sql);

    }

}

module.exports = Product