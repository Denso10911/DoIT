import { motion } from "framer-motion";

import "./TodoFilter.css";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: -250
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 1,
      mass: 1,
      damping: 8
    }
  }
};

export default function TodoInput({ filterParam, setFilterPatam }) {
  const filterParams = ["All", "Active", "Completed"];

  return (
    <motion.div
      className="todoFilterParams"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {filterParams.map((item, index) => {
        return (
          <motion.div
            className="todoFilterParam"
            key={index}
            whileHover={{ scale: 1.1 }}
          >
            <button
              onClick={() => setFilterPatam(item)}
              className={`todoFilterParamBtn ${
                filterParam === item ? "active" : ""
              }`}
            >
              {item}
            </button>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
