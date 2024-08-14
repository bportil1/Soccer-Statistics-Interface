const mysql = require("mysql2")

const conn = mysql.createConnection({
	host: "localhost",
	user: "ENTER USER MYSQL ACCOUNT USERNAME",
	password: "ENTER USER MYSQL ACCOUNT PASSWORD",
	database: "ENTER DATABASE NAME"
});

module.exports = {conn};



