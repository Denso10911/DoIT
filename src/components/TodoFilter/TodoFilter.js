import "./TodoFilter.css";

export default function TodoInput({ filterParam, setFilterPatam }) {
  const filterParams = ["All", "Active", "Completed"];

  return (
    <div className="todoFilterParams">
      {filterParams.map((item, index) => {
        return (
          <div className="todoFilterParam" key={index}>
            <button
              onClick={() => setFilterPatam(item)}
              className={`todoFilterParamBtn ${
                filterParam === item ? "active" : ""
              }`}
            >
              {item}
            </button>
          </div>
        );
      })}
    </div>
  );
}
