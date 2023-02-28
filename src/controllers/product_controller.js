var pool = require('../database/database');
var client = require('../database/database');


class Product {

    async createProduct(id_storage, description, cost, value, image) {
        pool.query('INSERT INTO produtos (estoque_id, descricao, custo, valor, imagem) VALUES ($1, $2, $3, $4, $5)',
            [id_storage, description, cost, value, image],
            (e) => {
            if (e) {
                console.log(e)
                throw e
            }
        }) 
    }

    async readProduct(id_product) {
         var result = await client.query('select * from produtos where id = $1',
            [id_product])
        
        console.log(result.rows[0])
        var prod = result.rows[0];
        console.log(prod)

        return prod;
    }

    async readProductAll(id_storage) {
         var result = await client.query('select * from produtos where estoque_id = $1',
            [id_storage])
        
        var products = result.rows;
        console.log(products)

        return products;
    }
}

module.exports = Product;