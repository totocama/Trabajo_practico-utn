function SearchBar({ onSearch }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Buscar jugador..."
        onChange={(e) => onSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />
    </div>
  );
}

export default SearchBar;
