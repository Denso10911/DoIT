import { useState } from "react";
import TodoItemText from "./TodoItemText/TodoItemText";
import TodoIcons from "./TodoIcons/TodoIcons";
import "./TodoItem.css";
import { zoomIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

export default function TodoItem(props) {
  let [itemText, setItemText] = useState(props.item.text);
  let [editMode, setEditMode] = useState(false);
  const styles = {
    zoomIn: {
      animation: "x 1s",
      animationName: Radium.keyframes(zoomIn, "zoomIn")
    }
  };

  return (
    <>
      <StyleRoot>
        <li style={styles.zoomIn}>
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
          </div>
        </li>
      </StyleRoot>
    </>
  );
}
