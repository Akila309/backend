import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import connectDb from "./config/db.js";
dotenv.config();


const app = express();
connectDb();


app.use (express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("Welcome to our backend😍")
})
const port = 5000;
app.listen(port,() =>{
    console.log(`server is started at ${port} and running`)
})

