var express= require('express'),
    app    = express(),
 todoRoutes= require('./routes/todo');
bodyParser = require('body-parser')

//===================================
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api/todos',todoRoutes)
app.use(express.static(__dirname+'/public'))
app.use(express.static(__dirname+'/views'))

//====================================

app.get("/",function(req,res){
	res.sendFile("index.html");
})



 //=======================================
 // SERVER
 //=======================================
 app.listen(3000,function(){
 	console.log("ToDoList_API server has started");
 })