import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit : "16kb"})) // For rate limiting of json documents
app.use(express.urlencoded({extended: true, limit: "16kb"}))  // Url_encoding like %20
app.use(express.static("Public")) // For static assests like image, videos etc
app.use(cookieParser())

export { app } 