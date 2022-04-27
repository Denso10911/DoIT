import "./styles.css";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoFilter from "./components/TodoFilter/TodoFilter";
import TodoInput from "./components/TodoInput/TodoInput";

export default function App() {
  let [todoItems, setTodoItems] = useState([
    {
      id: 1,
      text: "hi",
      done: true,
      color: "rgb(0, 150, 136)"
    }
  ]);

  let [textTodo, setTextTodo] = useState("");
  let [appHeight, setAppHeight] = useState(100);

  let [filterParam, setFilterPatam] = useState("All");
  console.log(todoItems.done);

  let fiterTodoItems = todoItems.filter((item) => {
    switch (filterParam) {
      case "Active":
        return !item.done;
      case "Completed":
        return item.done;
      default:
        return item;
    }
  });

  console.log(fiterTodoItems);

  useEffect(() => {
    let list = document.getElementById("list");
    setAppHeight(150 + list.clientHeight);
  }, [todoItems, fiterTodoItems]);

  return (
    <div
      className="App"
      style={{ maxHeight: `${appHeight}px`, minHeight: `${appHeight}px` }}
    >
      <TodoInput
        setTextTodo={setTextTodo}
        textTodo={textTodo}
        setTodoItems={setTodoItems}
        todoItems={todoItems}
      />
      <TodoFilter filterParam={filterParam} setFilterPatam={setFilterPatam} />
      <TodoList todoItems={fiterTodoItems} setTodoItems={setTodoItems} />
    </div>
  );
}
