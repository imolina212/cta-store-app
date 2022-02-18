//Dependencies
const express = require('express');
const products = express.Router();
const { 
    getAllProducts, 
    getOneProduct,
    // createProduct, 
    // updateProduct, 
    // deleteProduct 
} = require("../queries/products")

//INDEX
products.get("/", async (req, res) => {
    const allProducts = await getAllProducts();
    if(allProducts.length === 0) {
        res.status(500).json({error: "No Products Found"})
    } else {
        res.status(200).json(allProducts)
    }
});
//SHOW
products.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const product = await getOneProduct(id)
        if(product.id){
            res.status(200).json(product)
        } else {
            res.status(404).json({error: "error"})
        }
    } catch (err) {
        throw err;
    }
})
//CREATE

//UPDATE
//DESTROY

module.exports = products;