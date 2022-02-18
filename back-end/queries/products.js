const db = require("../db/dbConfig");

const getAllProducts = async () => {
    try {
        const allProducts = await db.any("SELECT * FROM products");
        return allProducts;

    } catch (err) {
        return err
    }
}

const getOneProduct = async (id) => {
    try {
        const product = await db.one("SELECT * FROM products WHERE id=$1", id);
        return product;
    } catch (err) {
        throw err
    }
}



module.exports = {
    getAllProducts,
    getOneProduct,
    // createProduct,
    // updateProduct,
    // deleteProduct,
}