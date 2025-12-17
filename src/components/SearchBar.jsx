function SearchBar({ setBusqueda }) {
  return (
    <input
      type="text"
      placeholder="Buscar jugador..."
      onChange={(e) => setBusqueda(e.target.value)}
    />
  );
}

export default SearchBar;

