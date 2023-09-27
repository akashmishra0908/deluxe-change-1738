const express=require("express");
const { connection } = require("./db");
const app=express();
const cors=require("cors");
const userrouter = require("./routes/user.routes");

//For req.body of post data
app.use(express.json());

// To handle cors origin error
app.use(cors({
    origin:'*'
}))
app.use("/users",userrouter)
app.get("/",(req,res)=>{
    res.status(200).json({msg:"Welcome to Base end point"})
})

app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("Connected to DB")
        console.log(`Server is running at ${process.env.PORT}`)
    } catch (error) {
        console.log("Error while Connecting to DB")
        console.log( error)
    }
})