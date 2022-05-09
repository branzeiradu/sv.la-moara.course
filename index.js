const express = require('express')
const dotenv = require("dotenv").config({ path: '.env' });
const server = express()
const port = 3000

server.use(express.static("public"));
const is_prod = process.env.RUNNING_ENV.toUpperCase() === "PROD";
console.log(`Is session secure: ${is_prod}`);

server.use("/tema1.html",(req, resp)=>{
    resp.sendFile(__dirname + "/tema1.html");
});

server.use("/tema2.html",(req, resp)=>{
    resp.sendFile(__dirname + "/tema2.html");
});




server.listen(process.env.PORT, () => {
    console.log(`Server started on port ${port}`)
})
