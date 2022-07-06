const db = require('../config/db');

class Brand {
    constructor(brand_name, logo, status) {
        this.brand_name = brand_name;
        this.logo = logo;
        this.status = status;
    }
    save() {
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() +1;
        let dd = d.getDate();

        let created_date = `${yyyy}-${mm}-${dd}`

        let sql = `
        INSERT INTO brands(
            brand_name,
            logo,
            status,
            created_date
        )
        VALUES(
            '${this.brand_name}',
            '${this.logo}',
            '${this.status}',
            '${created_date}'
        )`;

        return db.execute(sql);
    }
    static findAll() {
        let sql = "SELECT * FROM brands;";

        return db.execute(sql);
    }
    static findByName(name) {
        let sql = `SELECT * FROM brands WHERE brand_name = ${name};`;

        return db.execute(sql)
    }
}

module.exports = Brand