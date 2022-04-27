import { useState } from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";

export default function TodoList({ todoItems, setTodoItems }) {
  const onItemDelete = (itemId) => {
    setTodoItems([...todoItems].filter((e) => e.id !== itemId));
  };

  const onTextChange = (itemText, id) => {
    setTodoItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, id, text: itemText, done: false } : item
      )
    );
  };

  const onTaskDone = (id) => {
    setTodoItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, id, done: !item.done } : item
      )
    );
  };

  const onColorChange = (id, color) => {
    setTodoItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, id, color } : item))
    );
  };

  return (
    <>
      <ul className="todoList" id="list">
        {todoItems.map((item) => {
          return (
            <TodoItem
              item={item}
              onItemDelete={onItemDelete}
              onTextChange={onTextChange}
              onTaskDone={onTaskDone}
              onColorChange={onColorChange}
            />
          );
        })}
      </ul>
    </>
  );
}
