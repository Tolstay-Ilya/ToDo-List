const todos = [
    {
      id: 1,
      text: "Lorem",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Cooking",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Drink water",
      isCompleted: false,
    },
    {
      id: 4,
      text: "Play PC",
      isCompleted: false,
    },
    {
      id: 5,
      text: "Reading books",
      isCompleted: false,
    },
  ];


  // ROOT
function app() {
  
}
const root = document.querySelector("#root");
const header = createHeader();
const main = createMain(todos);
header.addEventListener("click", event => onHeaderClick(event))
root.append(header, main);

app()


// HANDLES
const onHeaderClick = (event) => {
    if (event.target.id === "btnAdd") {
    const todo = {
      id: todos.length + 1,
      text: event.target.previousElementSibling.value,
      isCompleted: false,
    }
    todos.push(todo);
    renderTodos(todos);
  } else if (event.target.id === "btnDelete"){
    todos.length = 0
    renderTodos(todos);
  }
  }


  // RENDER
function renderTodos(todos) {
    const main = createMain(todos)
    root.innerHTML = "";
    root.append(header, main)
  }



  // COMPONENTS
function createHeader() {
    const header = createElement("header", "d-flex align-items-center gap-2");
    const input = createElement("input", "form-control flex-grou-1", "");
    const btnAdd = createElement("button", "btn btn-primary", "Add");
    const btnDelete = createElement("button", "btn btn-danger", "Delete");
    
    input.id = "field"
    btnAdd.id = "btnAdd"
    btnDelete.id = "btnDelete"
    
    header.append(btnDelete, input, btnAdd);
    
    return header;
  }

  function createMain(todos){
    const list = createElement("div", "d-flex flex-column  gap-1", "");
    todos.forEach(todo => {
      const todoItem = createTodoItem(todo);
      list.append(todoItem);
    });
    return list;
  }

  function createTodoItem(todo) {
    const todoItem = createElement(
      "div",
      "d-flex align-items-center gap-2 border py-2 px-4 rounded-3"
    );
    todoItem.id = todo.id
    const input = createElement("input", "", "");
    input.type = "checkbox";
    input.checked = todo.isCompleted
    const text = createElement("p", "m-0 flex-grow-1", todo.text);
  
    const btnDelete = createElement("button", "btn-close", "");
  
    buttonDelete.id = todo.id
    constdate = createElement("span", "badge bg-secondary mx-2", todo.date)
   todoItem.addEventListener("input", () =>> {
     if (input.checked) {
       todo.isCompleted = true
       completedTasks++
       todoItem.className = classInputOn
       renderTodos(todos)
     } else {
       todo.isCompleted = false
       completedTasks--
       todoItem.className = classInputOff
       renderTodos(todos)
     }
   })
   buttonDelete.addEventListener("click", () =>> {
     const arr = todos.filter((event) => event.id !== todo.id)
     if (todo.isCompleted === true) {
       allTasks--
       completedTasks--
       todos = arr
       renderTodos(todos)
       return todos
     } else {
       allTasks--
       todos = arr
       renderTodos(todos)
       return arr
     }
   })