const db = require('../config/db');


class User {
    constructor(user_name, email, phone_number, status) {
        this.user_name = user_name;
        this.email = email;
        this.phone_number = phone_number;
        this.status = status;
    }
    save() {
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let created_date = `${yyyy}-${mm}-${dd}`

        let sql = `
        INSERT INTO users(
            user_name,
            email,
            phone_number,
            status,
            created_date
        )
        VALUES(
            '${this.user_name}',
            '${this.email}',
            '${this.phone_number}',
            '${this.status}',
            '${created_date}' 
        )`;

        return db.execute(sql);
    }
    static findAll() {
        let sql = "SELECT * FROM users;";

        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM users WHERE id = ${id};`;

        return db.execute(sql)
    }
}


module.exports = User

