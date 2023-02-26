var express = require('express');
var routes = ('./routes');
var Pool = require('pg').Pool;
//var config = "postgres://postgres:postgrespw@localhost:49153/mobStorageDB";
var config = {
    user: 'postgres',
    host: 'localhost',
    database: 'mobStorageDB',
    password: 'postgrespw',
    port: 49153,
}

var pool = new Pool(config);

const app = express();
app.use(express.json())
app.get('/',  async (req, res) => {
    pool.query('SELECT * FROM usuario', (e, s) => {
        if (e) {
            throw e
        }
        res.status(200).json(s.rows)
    })
})

app.listen(3000)
console.log('server run')