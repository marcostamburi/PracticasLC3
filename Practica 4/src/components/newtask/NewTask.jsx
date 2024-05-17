import { useState } from "react";
import PropTypes from "prop-types";

const NewTask = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    addTask(input);
    setInput("");
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button className="" onClick={handleSubmit}>Agregar tarea</button>
    </div>
  );
};

export default NewTask;

NewTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};
