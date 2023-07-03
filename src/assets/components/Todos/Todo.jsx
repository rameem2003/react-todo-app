import React from "react";
import { FaTrash } from "react-icons/fa6";

function Todo(props) {

    const todoDelete = (id) => {
        props.removeTodo(id)
    }

  return (
    <div className="todo">
      <div className="data">
        <h3>{props.todo.title}</h3>
        <h2>{props.todo.desc}</h2>
      </div>

      <button
        type="button"
        onClick={() => {
          todoDelete(props.id);
        }}
      >
        <FaTrash />
      </button>
    </div>
  );
}

export default Todo;
