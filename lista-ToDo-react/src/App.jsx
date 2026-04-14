import { useState } from 'react'

import Todo from './components/todo'
import TodoForm from './components/todoform'
import Search from './components/search'

import './App.css';
import Filter from './components/Filter';

function App() {
  // Lista de tarefas — cada tarefa tem id, texto, categoria e status de conclusão
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

  // Texto digitado na barra de pesquisa
  const [search, setSearch] = useState("");

  // Filtro de status: "all" | "completed" | "incomplete"
  const [filter, setFilter] = useState("all");

  // Ordenação alfabética: "asc" (A→Z) | "desc" (Z→A)
  const [sort, setSort] = useState("asc");

  // Adiciona uma nova tarefa à lista
  const addTodo = (text, category) => {
    const newTodo = [...todos,{
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    }]
    setTodos(newTodo);
  }

  // Remove uma tarefa pelo id
  const removeTodo = (id) => {
    const newTodo = [...todos]
    const filteredTodo = newTodo.filter(todo =>
      todo.id !== id ? todo : null)
    setTodos(filteredTodo);
  }

  // Alterna o status de conclusão de uma tarefa pelo id
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

    {/* Barra de pesquisa — atualiza o estado `search` a cada digitação */}
    <Search search={search} setSearch={setSearch} />

    {/* Controles de filtro por status e ordenação alfabética */}
    <Filter filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />

    <div className="todo-list">
      {todos
        // 1. Filtra por status (todas / completas / incompletas)
        .filter((todo)=> filter === "all" ? true : filter === "completed" ? todo.isCompleted : !todo.isCompleted)
        // 2. Filtra pelo texto da pesquisa (case-insensitive)
        .filter((todo) => todo.text.toLowerCase().includes(search))
        // 3. Ordena alfabeticamente pelo texto da tarefa
        .sort((a, b) => {
          return sort === "asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)
        })
        // 4. Renderiza cada tarefa como componente Todo
        .map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
        ))}
    </div>

    {/* Formulário para adicionar novas tarefas */}
    <TodoForm addTodo={addTodo}/>
  </div>
  );
}

export default App
