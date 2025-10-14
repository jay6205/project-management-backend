import dotenv from "dotenv";
dotenv.config({path:".env"});

import passport from "./utils/passport-config.js";  

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()

// basic configurations
app.use(express.json({ limit: "1000mb" }))
app.use(express.urlencoded({ extended: true, limit: "10mb" }))
app.use(express.static("public"))
app.use(cookieParser())

// cors configurations
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type", "Date", "Connection"]
}))

// import the routes
import healthCheckRouter from "./routes/healthcheck.routes.js";
import authRouter from "./routes/auth.routes.js"
app.use("/api/v1/healthcheck", healthCheckRouter)
app.use("/api/v1/auth", authRouter)

// Google Login routes

app.use(passport.initialize())

app.get("/", (req, res) => {
    res.send("home")
})

export default app