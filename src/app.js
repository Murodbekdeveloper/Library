import express from "express";
import "dotenv/config";
import fileUpload from "express-fileupload";
import connectDB from "./config/database.js";
import Routes from "./router/router.js";

const server = express();
server.use(express.json());
server.use(fileUpload());
server.use("/api", Routes());
const PORT = process.env.PORT;

const serverItem = async () => {
    try {
        await connectDB();
        console.log("Database connect");
        server.listen(PORT, () => {
            console.log("Server run with", PORT, "PORT");
        });
    } catch (error) {
        console.error(error.message);
    };
};

serverItem();