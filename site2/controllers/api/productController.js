const db = require('../../database/models')
var controller = {};
const sequelize = require('sequelize');
const { product } = require('../../middlewares/validator');

controller = {
    list: async (req, res) => {

        const products = await db.Product.findAll({include: ["category"], attributes: ["id", "name", "description"]});
        /*, attributes: ["id", "name", "description"]*/
        const categorias = await db.sequelize.query('select distinct categories.name, count(categories.name) as "productos en esta categoria" from products inner join categories on products.category_id = categories.id group by categories.name' )

       for (let i = 0; i < products.length; i++) {
           products[i].setDataValue("url", "http://localhost:3000/api/products/" + products[i].id)
        }
               
        let respuesta = {
            meta: {
                count: products.length,
                categorias: categorias

            },
            data: products
        }

        res.json(respuesta);
    }
}

module.exports = controller

