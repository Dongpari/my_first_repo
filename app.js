const path = require("path");
const express = require('express');
const app = express()

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, '/ImDongpal.html'));
})
app.get("/myInfo",(req,res)=>{
    res.sendFile(path.join(__dirname, '/myInfo.html'));
})

app.listen(8000);