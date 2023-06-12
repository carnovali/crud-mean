import { Router } from "express";
import { controller } from "../controllers/product.controller.js";

const productsRouter = Router()

productsRouter.get("/", controller.getProducts)
productsRouter.get("/:id", controller.getProduct)
productsRouter.post("/", controller.createProduct)
productsRouter.put("/:id", controller.updateProduct)
productsRouter.delete("/:id", controller.deleteProduct)


export default productsRouter

