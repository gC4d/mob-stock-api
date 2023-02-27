var pool = require('../database/database');
var client = require('../database/database');

class UserController {

    async getIdUser(email) {
    var result = await client.query('select id from usuario where email = $1', [email])
    console.log('id1:', result.rows[0].id)

    var id = result.rows[0].id

    return id;
    }
}

module.exports = UserController;