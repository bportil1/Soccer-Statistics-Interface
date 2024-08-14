const mysql = require("mysql2")

const conn = mysql.createConnection({
	host: "localhost",
	user: "bportil",
	password: "bergon",
	database: "soccer_stats"
});

module.exports = {conn};



