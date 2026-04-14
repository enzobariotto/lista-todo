// Componente de pesquisa — filtra as tarefas conforme o texto digitado
const search = ({search, setSearch}) => {
  return (
    <div className="search">
      <h2>Pesquisar:</h2>
      {/* Atualiza o estado `search` no componente pai a cada digitação */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite para pesquisar..."
      />
    </div>
  )
}

export default search
