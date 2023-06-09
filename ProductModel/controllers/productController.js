import Product from "../models/Product.js";
import asyncHandler from 'express-async-handler'

// @desc    Get all Products
// @route   GET /Products
// @access  Public


export const getProducts = asyncHandler(async (req, res) => {
    try {
        const products = await Product.find()
        res.json({ products })
    } catch (error) {
        console.log(error);
    }
})

// @desc    Delete All Products
// @route   DELETE /Products
// @access  Public

export const deleteAllProducts = asyncHandler(async (req, res) => {
    try {
        const products = await Product.deleteMany({})
        res.json({ products })
    } catch (error) {
        console.log(error);
    }
})

// @desc    Get by price range
// @route   GET /Products/range/:min/:max
// @access  Public

export const getByPriceRange = asyncHandler(async (req, res) => {
    console.log(typeof Number(req.params.min));
    try {
        const products = await Product.find({ "details.price": { $gte: Number(req.params.min), $lte: Number(req.params.max) } })
        res.json({ products })
    } catch (error) {
        console.log(error);
    }
})


// @desc    Get active products
// @route   GET /Products/active
// @access  Public

export const getActiveProducts = asyncHandler(async (req, res) => {
    try {
        const products = await Product.find({ isActive: true })
        res.json({ products })
    } catch (error) {
        console.log(error);
    }
})

// @desc    Add product
// @route   POST /Products
// @access  Public


export const addProduct = asyncHandler(async (req, res) => {
    try {
        const product = new Product(req.body)
        await product.save()
        res.status(201).json(product)
    } catch (error) {
        console.log(error._message);
        res.status(500).send('Server error');
    }
})

// @desc    DELETE product
// @route   DELETE /Products/:id
// @access  Public

export const deleteProduct = asyncHandler(async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        res.status(201).json(product)
    } catch (error) {
        console.log(error._message);
        res.status(500).send('Server error');
    }
})


// @desc    Update product
// @route   PUT /Products/:id
// @access  Public

export const updateProduct = asyncHandler(async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, {
            $set: {
                "isActive": req.body.isActive,    // set to true to make the product active, or false to make it inactive
                "details.discount": req.body.discount  // update the discount value to 20
            }
        },
            { runValidators: true })
        res.status(201).json(product)
    } catch (error) {
        console.log(error._message);
        res.status(500).send('Server error');
    }
})

// @desc    Get product
// @route   GET /Products/:id
// @access  Public

export const getProduct = asyncHandler(async (req, res) => {
    try {
        console.log(req.params.id);
        const product = await Product.findById(req.params.id)
        res.status(201).json(product)
    } catch (error) {
        console.log(error._message);
        res.status(500).send('Server error');
    }
})