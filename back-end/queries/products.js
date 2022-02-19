const e = require("express");
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

const createProduct = async (product) => {
    try {
        const newProduct = await db.one("INSERT INTO products (name, image, description, price, rating, featured) VALUES($1, $2, $3, $4, $5, $6) RETURNING *", 
        [product.name, product.image, product.description, product.price, product.rating, product.featured]);
        return newProduct;
    } catch (err) {
        return err;
    }
}

const updateProduct = async (id, product) => {
    try {
        const { name, image, description, price, rating, featured } = product;
        const query = "UPDATE products SET name=$1, image=$2, description=$3, price=$4, rating=$5, featured=$6 WHERE id=$7 RETURNING *";
        const values = [name, image, description, price, rating, featured, id];
        const updatedProduct = await db.one(query, values);

        return updatedProduct;
    } catch (err) {
        return err
    }
}

const deleteProduct = async (id) => {
    try {
        const deletedProduct = await db.one("DELETE FROM products WHERE id=$1 RETURNING *", id);

        return deletedProduct
    } catch (err) {
        return err;
    }
}


module.exports = {
    getAllProducts,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct,
}