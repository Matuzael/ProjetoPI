const express = require('express');
const app = express();

const conexao = require('./conexao.js');

app.get("/", (req,res)=> {
	res.sendFile(__dirname + "/views/index.html")
}).listen(3000);

app.post("/cadastro", (res,res)=>{
	res.send("oi")
})