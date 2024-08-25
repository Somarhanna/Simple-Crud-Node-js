const express = require('express')
const router = express.Router()
const Product = require('../models/product.models')
const {getProducts, getProduct, createProduct,updateProduct, deleteProduct } = require('../controllers/product.controller')

router.get("/", getProducts);
router.get('/:id',getProduct)

router.post('/',createProduct)

// updateProduct
router.put('/:id', updateProduct)

// deleteproduct
router.delete("/:id",deleteProduct)

module.exports = router