import { useState } from "react";

function AddPlayerForm({ onAdd }) {
  const [nombre, setNombre] = useState("");
  const [equipo, setEquipo] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
 const [deporte] = useState("Rugby");


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !equipo || !nacionalidad) return;

    const nuevoJugador = {
      idPlayer: Date.now(),      // id local
      strPlayer: nombre,
      strTeam: equipo,
      strNationality: nacionalidad,
      strSport: deporte,
      manual: true               // para diferenciar
    };

    onAdd(nuevoJugador);

    setNombre("");
    setEquipo("");
    setNacionalidad("");
  };

  return (
    <form className="card p-3 mb-4" onSubmit={handleSubmit}>
      <h5>Agregar jugador manualmente</h5>

      <input
        className="form-control mb-2"
        placeholder="Nombre del jugador"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Equipo"
        value={equipo}
        onChange={(e) => setEquipo(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Nacionalidad"
        value={nacionalidad}
        onChange={(e) => setNacionalidad(e.target.value)}
      />

      <button className="btn btn-primary">Agregar jugador</button>
    </form>
  );
}

export default AddPlayerForm;
