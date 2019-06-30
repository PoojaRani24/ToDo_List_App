db=require('../models');

exports.getTodos= function(req,res){
	db.Todo.find()
	.then(function(rettodos){
		res.json(rettodos)
	})
	.catch(function(err){
		res.json(err);
	})
}

exports.postTodos=function(req,res){
    db.Todo.create(req.body)
    .then(function(rettodo){
    	res.status(201).send(rettodo);
    	console.log(rettodo);
    })
    .catch(function(err){
    	res.send(err);
    })
}

exports.showTodos=function(req,res){
	db.Todo.findById(req.params.todoID)
	.then(function(rettodo){
		console.log(rettodo)
		res.json(rettodo);
	})
	.catch(function(err){
		res.json(err);
	})
}

exports.updateTodos=function(req,res){
	db.Todo.findByIdAndUpdate({_id:req.params.todoID},req.body,{new:true})
	.then(function(rettodo){
		res.json(rettodo)
	})
	.catch(function(err){
		res.send(err)
	})
}

exports.deleteTodos=function(req,res){
 	db.Todo.remove({_id:req.params.todoID})
 	.then(function(){
 		res.json({message:"You have Deleted a ToDo"})
 	})
 	.catch(function(err){
 		res.send(err);
 	})
 }

module.exports=exports;
