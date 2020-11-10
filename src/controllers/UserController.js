// Define a conexão com o banco de dados
const connection = require('../database/connection');

// Importa pacote crypto
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const users = await connection('users').select('*');

        return response.json(users);
    },

    async create(request, response) {
        const { login, password, name, email, whatsapp } = request.body; // Retorno cada atributo do body da requisição em uma variável

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('users').insert({
            id,
            login,
            password,
            name,
            email,
            whatsapp,
        })

        return response.json({ id });
    }
};