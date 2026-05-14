import exp from 'express'
import { ProductModel } from '../models/ProductModel.js'
import { verifyToken } from '../middlewares/verifyToken.js'

export const productApp = exp.Router()

//create product
productApp.post("/products", async (req, res, next) => {
    try {
        const newProduct = req.body
        const newProductDocument = new ProductModel(newProduct)
        const result = await newProductDocument.save()

        res.status(201).json({
            message: "product created",
            payload: result
        })
    } catch (err) {
        next(err)
    }
})


//read all products (PROTECTED)
productApp.get("/products", verifyToken, async (req, res) => {

    let productList = await ProductModel.find()

    res.status(200).json({
        message: "products list",
        payload: productList
    })
})


//Read product by id (PROTECTED)
productApp.get('/products/:id', verifyToken, async (req, res) => {

    const pid = req.params.id

    const productObj = await ProductModel.findById(pid)

    if (!productObj) {
        return res.status(404).json({ message: "product not found" })
    }

    res.status(200).json({
        message: "product details",
        payload: productObj
    })
})

//update product (PROTECTED)
productApp.put('/products/:id', verifyToken, async (req, res) => {

    const modifiedProduct = req.body
    const pid = req.params.id

    const updatedProduct = await ProductModel.findByIdAndUpdate(
        pid,
        { $set: { ...modifiedProduct } },
        { returnDocument: "after", runValidators: true }
    )

    res.status(200).json({
        message: "product updated",
        payload: updatedProduct
    })
})


//delete product (PROTECTED)
productApp.delete('/products/:id', verifyToken, async (req, res) => {

    const pid = req.params.id

    await ProductModel.findByIdAndDelete(pid)

    res.status(200).json({
        message: "product deleted"
    })
})



