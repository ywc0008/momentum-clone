const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDOLIst = document.getElementById("todo-list");

const toDos = [];

function saveToDOs() {
  localStorage.setItem("todos", JSON.stringifyy(toDos));
}

function deletToDO(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deletToDO);
  li.appendChild(span);
  li.appendChild(button);
  toDOLIst.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDOs();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
