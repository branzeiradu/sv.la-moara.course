const express = require('express')
const dotenv = require("dotenv").config({ path: '.env' });
const server = express()
const port = 3000

server.use(express.static("public"));
const is_prod = process.env.RUNNING_ENV.toUpperCase() === "PROD";
console.log(`Is session secure: ${is_prod}`);
server.use("/",(req, resp)=>{
    resp.sendFile(__dirname + "/dog.html");
})


server.listen(process.env.PORT, () => {
    console.log(`Server started on port ${port}`)
})
