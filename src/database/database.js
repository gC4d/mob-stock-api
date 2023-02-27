require('dotenv').config()
var Pool = require('pg').Pool;


var config = {
    user: String(process.env.db_user),
    host: String(process.env.db_host),
    database: String(process.env.db_name),
    password: String(process.env.db_password),
    port: process.env.db_port,
}
var pool = new Pool(config);
var client = pool.connect();

module.exports = pool, client;