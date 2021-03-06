import "./styles.css";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoFilter from "./components/TodoFilter/TodoFilter";
import TodoInput from "./components/TodoInput/TodoInput";

export default function App() {
  let [todoItems, setTodoItems] = useState([]);
  let [textTodo, setTextTodo] = useState("");
  let [appHeight, setAppHeight] = useState(100);
  let [filterParam, setFilterPatam] = useState("All");
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

  useEffect(() => {
    let list = document.getElementById("list");
    setAppHeight(150 + list.clientHeight);
  }, [todoItems, fiterTodoItems]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todoItems') || '[]' )
    setTodoItems(saved)
  }, [])

  useEffect(() => {
   localStorage.setItem('todoItems', JSON.stringify(todoItems))
  }, [todoItems])

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

      <TodoList
        todoItems={todoItems}
        fiterTodoItems={fiterTodoItems}
        setTodoItems={setTodoItems}
        filterParam={filterParam}
      />
    </div>
  );
}
