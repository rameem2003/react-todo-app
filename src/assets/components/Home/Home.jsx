import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import './home.css'
import NewTodo from '../NewTodo/NewTodo'
import Todos from '../Todos/Todos'




function Home() {

  const [todos, setTodos] = useState([]);

  const getTodo = (todo) => {
    setTodos((preTodos) => {
      return [...preTodos, {id : uuidv4(), todo}]
    })

    // console.log(todos);
  }

  const removeTodo = (id) => {
    // alert(id)

    
    setTodos((preTodos) => {
      const filteredTodos = todos.filter((todo) => todo.id !== id)
      return filteredTodos;
    });
  }

  return (
    <div className='body'>
      <h1>React TODO Application</h1>
      <p>All Todo's</p>
      <Todos todos = {todos} removeTodo = {removeTodo}/>
      <NewTodo getTodo = {getTodo}/>
    </div>
  )
}

export default Home
