import { useState } from "react";
import { BiColorFill } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import TodoIconsPrioritySpan from "./TodoIconsPrioritySpan";

export default function TodoIconsPriority(props) {
  let [editMode, setEditMode] = useState(false);
  let colors = [
    "rgb(235, 19, 19)",
    "rgb(233, 30, 99)",
    "rgb(103, 58, 183)",
    "rgb(0, 150, 136)",
    "rgb(76, 175, 80)"
  ];

  return (
    <div className="todoPriority">
      {!editMode && (
        <button
          onClick={() => {
            setEditMode(!editMode);
          }}
        >
          <BiColorFill />
        </button>
      )}
      {editMode && (
        <>
          <button
            onClick={() => {
              setEditMode(!editMode);
            }}
          >
            <AiOutlineClose />
          </button>
          <div className="todoPriority__container">
            {colors.map((e, index) => {
              return (
                <TodoIconsPrioritySpan
                  id={props.id}
                  color={e}
                  onColorChange={props.onColorChange}
                  setBgColor={props.setBgColor}
                  setEditMode={setEditMode}
                  key={index}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
