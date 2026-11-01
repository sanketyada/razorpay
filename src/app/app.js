import express from "express";
const app = express()
import paymentRoute from "../routes/payment.route.js"
import path from "path"
import { fileURLToPath } from "url";
import morgan from "morgan";
// const _filename =fileURLToPath(import.meta.url)//C:\Users\HP\OneDrive\Desktop\Snitch\razorpay\src\app\app.js
const _filename =path.dirname(fileURLToPath(import.meta.url)) //C:\Users\HP\OneDrive\Desktop\Snitch\razorpay\src\app
// console.log(_filename)
// app.use(morgan())
app.use(express.json())
app.get("/",(req,res)=>{
    res.sendFile(path.join(_filename,"../public/index.html"))
})



app.use("/api/payment",paymentRoute)

export default app;