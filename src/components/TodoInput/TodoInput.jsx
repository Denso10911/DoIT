import "./TodoInput.css";
import { FiPlusSquare } from "react-icons/fi";
import { useEffect } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: -250
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      type: "spring",
      mass: 1,
      damping: 8
    }
  }
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    textShadow: "0px 0px 8px white",
    boxShadow: "0px 0px 8px #607d8b",
    transition: { yoyo: 10 }
  }
};

const inputVariants = {
  hover: {
    boxShadow: "0px 0px 8px white"
  }
};

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
      <motion.div
        className="todo__add"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.input
          onChange={(e) => {
            setTextTodo(e.target.value);
          }}
          type="text"
          placeholder="New Task"
          value={textTodo}
          className="todo__input"
          id="myInput"
          variants={inputVariants}
          whileHover="hover"
          whileFocus="hover"
        />
        <motion.button
          onClick={() => {
            onAddNewItem(textTodo);
          }}
          className="todo__button"
          id="myBtn"
          variants={buttonVariants}
          whileHover="hover"
        >
          Add
        </motion.button>
        <button
          onClick={() => {
            onAddNewItem(textTodo);
          }}
          className="todo__button media"
        >
          <FiPlusSquare />
        </button>
      </motion.div>
    </>
  );
}
