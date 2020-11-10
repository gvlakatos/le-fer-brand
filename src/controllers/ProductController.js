// Define a conexão com o banco de dados
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const products = await connection('products').select('*');

        return response.json(products);
    },

    async create(request, response) {
        const { description, color, size, brand, composition } = request.body;

        const [id] = await connection('products').insert({
            description,
            color,
            size,
            brand,
            composition
        });

        return response.json({ id });
    }
};