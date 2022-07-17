const todoForm =document.getElementById("Todo-form");
const todoInput = todoForm.querySelector("input");
const todolist= document.getElementById("todo-list");



let todos = [];

function savetodo(){
    localStorage.setItem("todos",JSON.stringify(todos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos =todos.filter((todo) => todo.id !== parseInt(li.id));
    savetodo();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    console.log(newTodo);
    console.log(newTodo.id);
    li.id = newTodo.id; 
    const span = document.createElement("span");
    const button= document.createElement("button");
    span.innerText = newTodo.text;   
    button.innerText ="X";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);     
    todolist.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo= todoInput.value;
    todoInput.value = "";
    const newTodoobj = {
        text:newTodo,
        id: Date.now(),
    };
    todos.push(newTodoobj);
    paintTodo(newTodoobj);
    savetodo();
}
const TODOS_KEY = "todos";
todoForm.addEventListener("submit", handleTodoSubmit);
const savedtodos = localStorage.getItem(TODOS_KEY);

if(savedtodos !== null){
    const parsedTodos = JSON.parse(savedtodos);  
    todos = parsedTodos;     
    parsedTodos.forEach(paintTodo);
}

//.filter
//in the array 
//if it is false then it will not return 
//whatever that is true will return and saved
//so it will

