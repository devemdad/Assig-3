const express = require('express');

const app = express(); 

app.get("/", function(req, res){
    res.send("Hello World");
 });

 app.post("/", function(req,res){
    res.send("I am post body");
})


app.listen(5080, function(){
    console.log("Server Run Success.") ;
})