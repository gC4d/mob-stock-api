import express from 'express';
import client from './database/database.js'
    
const routes = express.Router();

routes.get('/',  async (req, res) => {
    var query = client.query("Select * from usuario")
    res.json({ ok: "OK" });
    console.log(query.rows)
})

export default routes;