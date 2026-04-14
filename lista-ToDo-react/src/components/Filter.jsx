// Componente de filtros — permite filtrar por status e ordenar alfabeticamente
const Filter = ({ filter, setFilter, sort, setSort }) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">

            {/* Filtro por status da tarefa */}
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">Todos</option>
                    <option value="completed">Completas</option>
                    <option value="incomplete">Incompletas</option>
                </select>
            </div>

            {/* Botões para ordenar a lista em ordem alfabética */}
            <div>
                <p>Ordem alfabética</p>
                {/* Define sort como "asc" para ordenar de A → Z */}
                <button onClick={() => setSort("asc")}>Ascendente</button>
                {/* Define sort como "desc" para ordenar de Z → A */}
                <button onClick={() => setSort("desc")}>Descendente</button>
            </div>

    </div>
    </div>
  )
}

export default Filter
