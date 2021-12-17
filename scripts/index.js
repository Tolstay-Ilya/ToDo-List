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