import { useState } from "react";

function AddPlayerForm({ onAdd }) {
  const [nombre, setNombre] = useState("");
  const [pais, setPais] = useState("");
  const [posicion, setPosicion] = useState("");
  const [edad, setEdad] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoJugador = {
      id: Date.now(),
      nombre,
      pais,
      posicion,
      edad,
    };

    onAdd(nuevoJugador);

    setNombre("");
    setPais("");
    setPosicion("");
    setEdad("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Agregar jugador manualmente</h3>

      <input placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input placeholder="País" value={pais} onChange={(e) => setPais(e.target.value)} />
      <input placeholder="Posición" value={posicion} onChange={(e) => setPosicion(e.target.value)} />
      <input placeholder="Edad" value={edad} onChange={(e) => setEdad(e.target.value)} />

      <button type="submit">Agregar</button>
    </form>
  );
}

export default AddPlayerForm;
