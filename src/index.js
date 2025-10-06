import dotenv from "dotenv"
import app from "./app.js";
import connectDB from "./db/index.js"
dotenv.config({
    path: "./.env",
});

const port = process.env.EXPRESS_PORT || 8000

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Example app listening on port http://localhost:${port}`)
        })
    })
    .catch(err => {
        console.error("MONGODB connection issue", err);
        process.exit(1)
    })
