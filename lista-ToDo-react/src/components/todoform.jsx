import {useState} from 'react';

// Formulário para criar uma nova tarefa
const TodoForm = ({addTodo}) => {
    // Texto do título da nova tarefa
    const[value, setValue] = useState("");

    // Categoria selecionada para a nova tarefa
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        // Impede o recarregamento da página ao submeter o formulário
        e.preventDefault();

        // Não permite criar tarefa sem título ou categoria
        if(!value || !category) return;

        // Limpa os campos após o envio
        setValue("");
        setCategory("");

        // Chama a função do componente pai para adicionar a tarefa
        addTodo(value, category);

        console.log(category, value);
    }

  return (
    <div className="todo-form">
      <h2>Adicionar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        {/* Campo de texto para o título da tarefa */}
        <input type="text" placeholder='Digite o título' value={value} onChange={(e) => setValue(e.target.value)}/>

        {/* Seletor de categoria */}
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione a categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
        </select>

        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  )
}

export default TodoForm
