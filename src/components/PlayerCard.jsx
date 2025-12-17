function PlayerCard({ jugador, onDelete }) {
  return (
    <div style={{ border: "1px solid black", margin: 10, padding: 10 }}>
      <h3>{jugador.strPlayer || jugador.nombre}</h3>
      <p>País: {jugador.strNationality || jugador.pais}</p>
      <p>Posición: {jugador.strPosition || jugador.posicion}</p>
      <p>Edad: {jugador.dateBorn || jugador.edad}</p>

      {onDelete && (
        <button onClick={() => onDelete(jugador.id)}>
          Eliminar
        </button>
      )}
    </div>
  );
}

export default PlayerCard;

