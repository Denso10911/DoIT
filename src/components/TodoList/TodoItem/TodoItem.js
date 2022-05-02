import { useState } from "react";
import { motion } from "framer-motion";
import TodoItemText from "./TodoItemText/TodoItemText";
import TodoIcons from "./TodoIcons/TodoIcons";
import "./TodoItem.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      when: "beforeChildren"
    }
  }
};

const childrenVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
};

export default function TodoItem(props) {
  let [itemText, setItemText] = useState(props.item.text);
  let [editMode, setEditMode] = useState(false);

  return (
    <motion.li
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ y: -1000 }}
    >
      <div
        className="todoItem"
        style={{ backgroundColor: `${props.item.color}` }}
      >
        <TodoItemText
          item={props.item}
          editMode={editMode}
          itemText={itemText}
          setItemText={setItemText}
        />
        <motion.div variants={childrenVariants}>
          <TodoIcons
            item={props.item}
            onTaskDone={props.onTaskDone}
            editMode={editMode}
            setEditMode={setEditMode}
            onTextChange={props.onTextChange}
            itemText={itemText}
            onColorChange={props.onColorChange}
            onItemDelete={props.onItemDelete}
          />
        </motion.div>
      </div>
    </motion.li>
  );
}
