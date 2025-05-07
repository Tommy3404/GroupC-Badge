// @ts-types="npm:@types/express"
import express from "npm:express"; 
const app = express() 

app.get("/", ( request , response )=>{
    response.send("Welcome to our Server")
})
app.get("/submitbag", ( request , response )=>{
    response.send("Default Response")
})

app.listen(3005)
console.log("Listening on port 3005");



