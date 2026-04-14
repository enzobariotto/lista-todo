import { useState } from 'react'

import Todo from './components/todo'
import TodoForm from './components/todoform'
import Search from './components/search'

import './App.css';
import Filter from './components/Filter';

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ])

  const [search, setSearch] = useState("");

  const addTodo = (text, category) => {
    const newTodo = [...todos,{
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    }]
    setTodos(newTodo);
  }

  const removeTodo = (id) => {
    const newTodo = [...todos]
    const filteredTodo = newTodo.filter(todo => 
      todo.id !== id ? todo : null)
    setTodos(filteredTodo);
  }

  const completeTodo = (id) => {
    const newTodo = [...todos]
    newTodo.map(todo => {
      if(todo.id === id){
        todo.isCompleted = !todo.isCompleted
      }
      return todo;
    })
    setTodos(newTodo);

  }

  return(
  <div className="app">
    <h1>Lista de Tarefas</h1>
    <Search search={search} setSearch={setSearch} />
    <Filter />
    <div className="todo-list">
      {todos.filter((todo) => todo.text.toLowerCase().includes(search)).map((todo) => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
      ))}
    </div>
    <TodoForm addTodo={addTodo}/>
  </div>
  );
}

export default App
