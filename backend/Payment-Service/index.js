import dotenv from "dotenv";
import {app} from "./app.js"
import connectDB from "./DB/db.js";
dotenv.config();

connectDB().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("SERVER IS RUNNING");
    })
}).catch((err)=>{console.log("FAILED")})