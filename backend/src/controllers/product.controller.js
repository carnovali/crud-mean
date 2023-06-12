import { productModel } from "../models/products.model.js";

export const controller = {
    async getProducts(_req, res) {
        try {
            const product = await productModel.find()
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json(error.message)
        }
    },

    async getProduct(req, res) {
        try {
            const {id} = req.params
            const product = await productModel.findById(id)
            if (!product) {
                res.status(404).json(`Product with ID: ${id} not found`)
            }
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json(error.message)
        }
    },

    async createProduct(req, res) {
        try {
            const product = await productModel.create(req.body)
            res.status(201).json(product)
        } catch (error) {
            res.status(500).json(`An error has ocurred: ${error.message}`)
        }
    },

    async updateProduct(req, res ){
        try {
            const {id} = req.params
            const product = await productModel.findOneAndUpdate(
                {_id : id},
                req.body,
                {new: true}
            )
            if(!product) {
                res.status(404).json(`Product with ID: ${id} not found`)
            }
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json(error.message)
        }
    },

    async deleteProduct(req, res) {
        try {
            const {id} = req.params
            const product = await productModel.findByIdAndDelete(id)
            if (!product) {
                res.status(404).json(`Product with ID: ${id} not found`)
            }
            res.status(200).json(`Product with ID: ${id} deleted successfully`)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}