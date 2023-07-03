import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";

function NewTodo(props) {
  const [todo, setTodo] = useState({
    title: "",
    desc: "",
  });

  const handleChange = (e) => {
    let fieldName = e.target.name;
    setTodo((oldtodo) => {
      return {...oldtodo, [fieldName] : e.target.value};
    });
  };

  const uploadTodo = (e) => {
    e.preventDefault();
    props.getTodo(todo);
    setTodo({title : "", desc : ""})
  };

  return (
    <form action="" onSubmit={uploadTodo}>
      <div className="input-field">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title.... "
          value={todo.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="desc"
          id=""
          placeholder="Add Your Todo...."
          value={todo.desc}
          onChange={handleChange}
        />
      </div>

      <button type="submit">
        <FaPaperPlane />
      </button>
    </form>
  );
}

export default NewTodo;
