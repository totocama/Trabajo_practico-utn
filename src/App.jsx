import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import PlayerCard from "./components/PlayerCard";
import AddPlayerForm from "./components/AddPlayerForm";
import { buscarJugadores } from "./services/rugbyAPI";

function App() {
  const [jugadoresAPI, setJugadoresAPI] = useState([]);
  const [jugadoresManual, setJugadoresManual] = useState([]);
  const [busqueda, setBusqueda] = useState("rugby");

  // BUSCAR JUGADORES EN LA API
  useEffect(() => {
    buscarJugadores(busqueda).then((data) => {
      setJugadoresAPI(data);
    });
  }, [busqueda]);

  // AGREGAR JUGADOR MANUAL
  const agregarJugadorManual = (jugador) => {
    setJugadoresManual([...jugadoresManual, jugador]);
  };

  // ELIMINAR JUGADOR MANUAL
  const eliminarJugadorManual = (id) => {
    const filtrados = jugadoresManual.filter(
      (jugador) => jugador.id !== id
    );
    setJugadoresManual(filtrados);
  };

  return (
    <div>
      <h1>Jugadores de Rugby</h1>

      <SearchBar setBusqueda={setBusqueda} />

      <AddPlayerForm onAdd={agregarJugadorManual} />

      <h2>Resultados de la API</h2>
      {jugadoresAPI.map((jugador) => (
        <PlayerCard key={jugador.idPlayer} jugador={jugador} />
      ))}

      <h2>Jugadores agregados manualmente</h2>
      {jugadoresManual.map((jugador) => (
        <PlayerCard
          key={jugador.id}
          jugador={jugador}
          onDelete={eliminarJugadorManual}
        />
      ))}
    </div>
  );
}

export default App;



