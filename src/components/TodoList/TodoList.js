import TodoItem from "./TodoItem/TodoItem";
import { motion } from "framer-motion";

import "./TodoList.css";

export default function TodoList({
  todoItems,
  fiterTodoItems,
  setTodoItems,
  filterParam
}) {
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

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5
      }
    }
  };

  const childVariants = {
    hidden: {
      x: -150,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring"
      }
    }
  };

  if (fiterTodoItems.length === 0) {
    return (
      <ul className="todoList" id="list">
        <div className="todoList__noTask">
          {todoItems.length === 0 ? (
            <p>
              You don't have any tasks. <br />
              Maybe you want to do something ?
            </p>
          ) : (
            <p> You don't have any {filterParam.toLowerCase()} tasks </p>
          )}
        </div>
      </ul>
    );
  } else {
    return (
      <motion.ul
        className="todoList"
        id="list"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {fiterTodoItems.map((item, index) => {
          return (
            <motion.div key={index} variants={childVariants}>
              <TodoItem
                item={item}
                onItemDelete={onItemDelete}
                onTextChange={onTextChange}
                onTaskDone={onTaskDone}
                onColorChange={onColorChange}
              />
            </motion.div>
          );
        })}
      </motion.ul>
    );
  }
}
