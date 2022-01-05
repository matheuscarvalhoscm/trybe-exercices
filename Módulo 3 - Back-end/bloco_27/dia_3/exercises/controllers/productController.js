const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

const HTTP_OK_STATUS = 200;
const HTTP_ERROR_STATUS = 404;
const HTTP_INTERNAL_STATUS = 500;

router.get('/products', async (req, res, next) => {
  const products = await ProductModel.getAll();

  products 
  ? res.status(HTTP_OK_STATUS).json(products)
  : res.status(HTTP_ERROR_STATUS).json({ message: "There's no products registered" });

});

router.get('/products/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  product 
  ? res.status(HTTP_OK_STATUS).json(product)
  : res.status(HTTP_ERROR_STATUS).json({ message: "Product not found" });

});

router.post('/products', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  newProduct
  ? res.status(HTTP_OK_STATUS).json(newProduct)
  : res.status(HTTP_INTERNAL_STATUS).json({ message: "Internal Error" });

});

router.delete('/products/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  products
  ? res.status(HTTP_OK_STATUS).json(products)
  : res.status(HTTP_INTERNAL_STATUS).json({ message: "Internal Error" });

});

router.put('/products/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  products
  ? res.status(HTTP_OK_STATUS).json(products)
  : res.status(HTTP_INTERNAL_STATUS).json({ message: "Internal Error" });
  
});

module.exports = router;
