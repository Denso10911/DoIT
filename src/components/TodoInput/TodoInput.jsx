import "./TodoInput.css";
import { FiPlusSquare } from "react-icons/fi";
import { useEffect } from "react";

export default function TodoInput({
  setTextTodo,
  textTodo,
  setTodoItems,
  todoItems
}) {
  let onAddNewItem = (textTodo) => {
    if (!!textTodo) {
      setTodoItems([
        ...todoItems,
        {
          done: false,
          id: Date.now(),
          text: textTodo,
          color: "rgb(0, 150, 136)"
        }
      ]);
      setTextTodo("");
    }
  };

  useEffect(() => {
    let input = document.getElementById("myInput");
    input.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("myBtn").click();
      }
    });
  }, []);

  return (
    <>
      <div className="todo__add">
        <input
          onChange={(e) => {
            setTextTodo(e.target.value);
          }}
          type="text"
          placeholder="What?"
          value={textTodo}
          className="todo__input"
          id="myInput"
        />
        <button
          onClick={() => {
            onAddNewItem(textTodo);
          }}
          className="todo__button"
          id="myBtn"
        >
          Add
        </button>
        <button
          onClick={() => {
            onAddNewItem(textTodo);
          }}
          className="todo__button media"
        >
          <FiPlusSquare />
        </button>
      </div>
    </>
  );
}
