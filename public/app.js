$(document).ready(function(){
	$.getJSON("/api/todos")
	.then(addTodos)
	.catch(function(err){
		console.log(err);
	})

	$("#todoInput").keypress(function(event){
		if(event.which==13){
			createTodo()
		}
	})

	$(".list").on('click','span',function(event){
		event.stopPropagation();
       deleteToDo($(this).parent())
	})

	$(".list").on('click','li',function(){
		updateTodo($(this))
	})
})

function addTodos(todos){
	todos.forEach(function(todo){
		addTodo(todo);
	})
}

function addTodo(todo){
	var newtodo=$('<li class="task" >'+todo.name+'<span>X</span>'+'</li>')
	newtodo.data('id',todo._id)
	newtodo.data('completed',todo.completed)
		if(todo.completed==true){
			newtodo.addClass("done");
		}
        $(".list").append(newtodo);
}

function createTodo(){
	var todo=$("#todoInput").val();
	$.post("/api/todos",{name:todo})
	.then(function(rettodo){
		//console.log(rettodo);
		$("#todoInput").val(' ');
		addTodo(rettodo);
	})
	.catch(function(err){
		console.log(err);
	})
}

function deleteToDo(todo){
	 var id=todo.data('id')
	 var deleteId='/api/todos/'+id;
	  $.ajax({
	  	method:'DELETE',
	  	url: deleteId
	  })
	  .then(function(deletemssg){
	  	todo.remove();
	  })
	  .catch(function(err){
	  	console.log(err)
	  })
}

function updateTodo(todo){
	var isDone=!todo.data('completed')
	var updateData={completed:isDone}
	var id= todo.data('id')
	console.log(isDone)
	var updateUrl="/api/todos/"+id
	$.ajax({
		method:'PUT',
		url:updateUrl,
		data:updateData
	})
	.then(function(rettodo){
		console.log(rettodo)
		todo.toggleClass("done")
		todo.data('completed',isDone)
	})
	.catch(function(err){
		console.log(err)
	})

	}