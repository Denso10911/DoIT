import TodoIconsCheck from "./TodoIconsCheck";
import TodoIconsEdit from "./TodoIconsEdit";
import TodoIconsPriority from "./TodoIconsPriority";
import { FiTrash } from "react-icons/fi";

export default function TodoIcons(props) {
  return (
    <div className="todoIcons">
      <TodoIconsCheck
        done={props.item.done}
        onTaskDone={props.onTaskDone}
        id={props.item.id}
      />
      <div className="todoDelete">
        <button
          onClick={() => {
            props.onItemDelete(props.item.id);
          }}
        >
          <FiTrash />
        </button>
      </div>
      <TodoIconsEdit
        editMode={props.editMode}
        setEditMode={props.setEditMode}
        onTextChange={props.onTextChange}
        itemText={props.itemText}
        id={props.item.id}
      />
      <TodoIconsPriority
        id={props.item.id}
        onColorChange={props.onColorChange}
      />
    </div>
  );
}
