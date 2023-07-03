import React from "react";
import Todo from "./Todo";

function Todos(props) {
  
  return (
    <div className="todos">
      {props.todos.map((todo) => {
        return (
          <Todo todo = {todo.todo} id = {todo.id} key = {todo.id} removeTodo = {props.removeTodo}/>
        );
      })}
    </div>
  );
}

export default Todos;
