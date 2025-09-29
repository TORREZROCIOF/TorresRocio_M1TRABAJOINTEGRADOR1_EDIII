const express = require("express");
const path = require("path");
const app = express();
app.get("/", (req, res) =>{
    //res.send("Hola Mundo!")}
    res.sendFile(path.join(__dirname + "/index.html"));
});
app.listen(3000, () =>{
    console.log("Server runnig on port", 3000)
});