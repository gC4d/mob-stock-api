var express = require('express');
var pool = require('./database/database');
var client = require('./database/database');
var UserController = require('./controllers/user_controller')
var ProductController = require('./controllers/product_controller')

var routes = new express.Router();
var userController = new UserController();
var prodController = new ProductController();

// ***User methods*** //

// User register
routes.post('/user/register', (req, res) => {
    const { name, email, password } = req.body
    try {
        userController.createUser(name, email, password)
        res.status(201).send('SUCCESS')
    } catch (error) {
        console.log(error)
    }
})
// User authentication
routes.post('/user/auth', async (req, res) => {
    const { email, password } = req.body
    try {
        var user = await userController.authUser(email, password)

        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
})
// User read all
routes.get('/user/read/all', async (req, res) => {
    pool.query('SELECT * FROM usuario',(e, r) => {
        if (e) {
            console.log(e)
            throw e
        }
        console.log(r.rows)
        res.status(200).json(r.rows)
    })
})

// ***Storage methods*** //

// Storage create
routes.post('/storage/create', async (req, res) => {
    const { name_storage, email_user } = req.body
    var id_user = await userController.getIdUser(email_user)
    try {
        pool.query('INSERT INTO estoque (nome_estoque, usuario_id) VALUES ($1, $2)',
            [name_storage, id_user],
            (e, result) => {
            if (e) {
                console.log(e)
            }
              res.status(201).json(result.rows)
        })
    } catch (error) {
        console.log(error)
    }
})
// Storage read
routes.get('/storage/read', async (req, res) => {
    const { name_storage, email_user } = req.body
    var id_user = await userController.getIdUser(email_user)
    try {
        pool.query('SELECT * FROM estoque WHERE nome_estoque = $1 AND usuario_id = $2',
            [name_storage, id_user],
            (e, r) => {
            if (e) {
                console.log(e)
            }
              res.status(200).json(r.rows[0])
        })
    } catch (error) {
        console.log(error)
    }
})
// Storage read all
routes.get('/storage/read/all', async (req, res) => {
    const { email_user } = req.body
    var id_user = await userController.getIdUser(email_user)
    try {
        pool.query('SELECT * FROM estoque WHERE usuario_id = $1',
            [id_user],
            (e, r) => {
            if (e) {
                console.log(e)
            }
              res.status(200).json(r.rows[0])
        })
    } catch (error) {
        console.log(error)
    }
})
// Storage update
routes.patch('/storage/update', async (req, res) => {
    const { name_storage, new_name_storage, email_user } = req.body
    var id_user = await userController.getIdUser(email_user)
    try {
        pool.query('UPDATE estoque SET nome_estoque = $1 WHERE nome_estoque = $2 AND usuario_id = $3',
            [new_name_storage, name_storage, id_user],
            (e, r) => {
            if (e) {
                console.log(e)
            }
              res.status(201).json(r.rows)
        })
    } catch (error) {
        console.log(error)
    }
})
// Storage delete
routes.delete('/storage/delete', async (req, res) => {
    const { name_storage, email_user } = req.body
    var id_user = await userController.getIdUser(email_user)
    try {
        pool.query('DELETE FROM estoque WHERE nome_estoque = $1 AND usuario_id = $2',
            [name_storage, id_user],
            (e, r) => {
            if (e) {
                console.log(e)
                }
                console.log(name_storage + " deletado")
              res.status(201).json(r.rows)
        })
    } catch (error) {
        console.log(error)
    }
})

// ***Products methods*** //

// Product create
routes.post('/product/create', async (req, res) => {
    const { id_storage, description, cost, value, image } = req.body
    try {
        prodController.createProduct(id_storage, description, cost, value, image) 
        res.status(201).json('product created')
    } catch (error) {
        console.log(error)
    }
})
// Product read
routes.get('/product/read', async (req, res) => {
    const { id_product } = req.body
    try {
        var product = await prodController.readProduct(id_product)
        res.status(200).json(product)
        
    } catch (error) {
        console.log(error)
    }
})
// Product read all
routes.get('/product/read/all', async (req, res) => {
    const { id_storage } = req.body
    try {
        var products = await prodController.readProductAll(id_storage)
        res.status(200).json(products)

    } catch (error) {
        console.log(error)
    }
})
// Product update
routes.patch('/product/update', async (req, res) => {
    const { name_storage, new_name_storage, email_user } = req.body
    var id_user = await userController.getIdUser(email_user)
    try {
        pool.query('UPDATE estoque SET nome_estoque = $1 WHERE nome_estoque = $2 AND usuario_id = $3',
            [new_name_storage, name_storage, id_user],
            (e, r) => {
            if (e) {
                console.log(e)
            }
              res.status(201).json(r.rows)
        })
    } catch (error) {
        console.log(error)
    }
})
// product delete
routes.delete('/storage/delete', async (req, res) => {
    const { name_storage, email_user } = req.body
    var id_user = await userController.getIdUser(email_user)
    try {
        pool.query('DELETE FROM estoque WHERE nome_estoque = $1 AND usuario_id = $2',
            [name_storage, id_user],
            (e, r) => {
            if (e) {
                console.log(e)
                }
                console.log(name_storage + " deletado")
              res.status(201).json(r.rows)
        })
    } catch (error) {
        console.log(error)
    }
})




module.exports = routes;