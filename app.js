import express from 'express'
import userRoute from "./routes/user.js"
let app=express()

app.use("/user",userRoute)


console.log("hello")

app.listen(3000,()=>{
    console.log("app is listening")
})


