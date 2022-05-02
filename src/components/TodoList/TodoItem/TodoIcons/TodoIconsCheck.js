import { FiSquare, FiCheckSquare } from "react-icons/fi";

export default function TodoIconsCheck(props) {
  return (
    <div
      className="todoCheck"
      whileHover={{ scale: 1.1, fontSize: "30px" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {props.done ? (
        <button
          onClick={() => {
            props.onTaskDone(props.id);
          }}
        >
          <FiCheckSquare />
        </button>
      ) : (
        <button
          onClick={() => {
            props.onTaskDone(props.id);
          }}
        >
          <FiSquare />
        </button>
      )}
    </div>
  );
}
