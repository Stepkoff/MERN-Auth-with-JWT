import "dotenv/config";
import express from "express";
import { connectToDatabase } from "./config/db";

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        status: "healthy"
    })

})


app.listen(
    4004,
    async () => {
        console.log("Server is running on http://localhost:4004 in dev env");
        await connectToDatabase()
    }
)

