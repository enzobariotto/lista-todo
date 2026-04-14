import React from 'react'

// Componente que representa uma única tarefa na lista
// Recebe a tarefa e as funções de completar/remover via props
const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
     // Aplica risco no texto quando a tarefa estiver concluída
     <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
          <div className="content">
            <p>{todo.text}</p>
            {/* Exibe a categoria entre parênteses */}
            <p className="category">({todo.category})</p>
          </div>
          <div>
            {/* Alterna o status de conclusão da tarefa */}
            <button className='complete' onClick={() => completeTodo(todo.id)}>Completar</button>
            {/* Remove a tarefa da lista */}
            <button className='remove' onClick={() => removeTodo(todo.id)}>X</button>
          </div>
        </div>
      )}

export default Todo
