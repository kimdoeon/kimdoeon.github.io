// 투두리스트 //
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector(".todo-list");
let todos=[];
const TODOS_KEY = "todo-list"

function removeTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter(item=>item.id!==parseInt(li.id));
    saveToDo(todos);
}

function saveToDo(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}
function addLine(event){
    const li = event.target.parentElement;
    // console.dir(li.childNodes[1]);
    li.childNodes[1].classList.toggle("line-through");
    event.target.classList.toggle("color-change");
}

function printTodo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span= document.createElement("span");
    span.innerText = newTodoObj.text;
    const button = document.createElement("button");
    button.innerText="X";
    button.classList.add("btn-remove");
    button.addEventListener("click",removeTodo);
    const check = document.createElement("button");
    check.classList.add("btn-check");
    check.addEventListener("click",addLine);

    li.appendChild(check);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);

}
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    const newTodoObj = {
        id : Date.now(),
        text : newTodo,
    }
    todos.push(newTodoObj);
    saveToDo();
    printTodo(newTodoObj);
}
todoForm.addEventListener("submit",handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(item=>printTodo(item));
    
}


