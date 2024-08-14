const express = require("express");
const cors = require("cors");
const server = express();

const calls = require("./public/sqlCalls");

server.use(express.static("public"));
server.use(cors());
server.use(express.urlencoded({extended: false}));

server.use(express.json());

server.listen(3100, "192.168.1.114", function(){
        console.log("listening on port 3100");
        }
);

module.exports = {server};

