//Dependencies
const express = require('express');
const products = express.Router();
const { 
    getAllProducts, 
    getOneProduct,
    createProduct,
    updateProduct, 
    deleteProduct 
} = require("../queries/products")

//INDEX
products.get("/", async (_, res) => {
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
products.post("/", async (req, res) => {
    try {
        const newProduct = await createProduct(req.body)
        res.status(200).json(newProduct)
    } catch(err) {
        return err;
    }
})

//UPDATE
products.put("/:id", async (req, res) => {
    const updatedProduct = await updateProduct(req.body, req.params.id);
        if(updatedProduct.id){
            res.status(200).json(updatedProduct)
        } else {
            res.status(422).json("error")
        }
})

//DESTROY
products.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await deleteProduct(id)
        if(deletedProduct.id){
            res.status(200).json(deletedProduct)
        } else {
            res.status(422).json("Product Not Found")
        }
    } catch (err) {
        return err;
    }
})

module.exports = products;