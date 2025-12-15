function PlayerCard({ jugador }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "12px",
      padding: "15px",
      width: "280px",
      background: "#f9f9f9",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      
      <img
        src={jugador.strCutout || jugador.strThumb || "https://via.placeholder.com/200"}
        alt={jugador.strPlayer}
        style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "100px" }}
      />

      <h2 style={{ marginTop: "10px" }}>{jugador.strPlayer}</h2>
      <p><strong>Nacionalidad:</strong> {jugador.strNationality}</p>
      <p><strong>Equipo:</strong> {jugador.strTeam || "Desconocido"}</p>
      <p><strong>Deporte:</strong> {jugador.strSport}</p>

    </div>
  );
}

export default PlayerCard;
