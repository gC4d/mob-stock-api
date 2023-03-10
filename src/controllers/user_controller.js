var client = require('../database/database');

class UserController {

    async createUser(name, email, password) {
        if (name != null && email != null && password != null) {
            var result = await client.query('INSERT INTO usuario (nome, email, senha) VALUES ($1, $2, $3)',
                [name, email, password])

            console.log(result.rows[0])
            return (result.rows[0])
        } else {
            return "User not created"
        }
    }

    async authUser(email, password) {
        var result = await client.query('select * from usuario where email = $1 AND senha = $2',
            [email, password])

        var user = result.rows[0];
        console.log(user)

        return user;
    }

    async readAllUsers() {
        var result = await client.query('select * from usuario')

        var users = result.rows;
        console.log(users)

        return users;
    }

    async getIdUser(email) {
        var result = await client.query('select id from usuario where email = $1',
            [email])
        console.log('id1:', result.rows[0].id)

        var id = result.rows[0].id

        return id;
    }
}

module.exports = UserController;