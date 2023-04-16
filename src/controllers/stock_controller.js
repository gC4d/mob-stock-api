var client = require('../database/database');

class Stock {

    async createStock(description, user_id, category) {
        if (category != null && user_id != null && description != null) {
            var result = await client.query('INSERT INTO estoque (descricao, id_usuario, categoria) VALUES ($1, $2, $3)',
                [description, user_id, category])

            console.log(result.rows[0])
            return (result.rows[0])
        } else {
            throw "Value cannot be null";
        }
    }
    
    async readAllStocks(id_user) {
        var result = await client.query('select * from estoque where id_usuario = $1',
            [id_user])
        var stocks = result.rows

        console.log(stocks)

        return stocks;
    }
}

module.exports = Stock;