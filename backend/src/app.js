import express from 'express'
import cors from 'cors'
import initConnect from '../config/db.js'
import dotENV from 'dotenv'
import productsRouter from './routes/product.router.js'

dotENV.config({path : './variables.env' })
const MONGO_URI = process.env.MONGO_URI
initConnect(MONGO_URI)

const app = express()

app.use(express.json())

app.use(cors())

app.use("/api/products", productsRouter)

app.get("/", (req, res) => {
    res.send('mensaje pagina principal')
})

export default app