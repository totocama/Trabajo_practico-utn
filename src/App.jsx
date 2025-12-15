import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import PlayerCard from "./components/PlayerCard";
import AddPlayerForm from "./components/AddPlayerForm";
import { buscarJugadores } from "./services/rugbyAPI";

function App() {
  const [jugadoresAPI, setJugadoresAPI] = useState([]);
  const [jugadoresManual, setJugadoresManual] = useState([]);
  const [busqueda, setBusqueda] = useState("rugby");

  useEffect(() => {
    async function getJugadores() {
      const data = await buscarJugadores(busqueda);
      setJugadoresAPI(data);
    }
    getJugadores();
  }, [busqueda]);

  // ✅ agregar jugador manual
  const agregarJugadorManual = (jugador) => {
    setJugadoresManual([...jugadoresManual, jugador]);
  };

  // unir ambos listados
  const jugadores = [...jugadoresManual, ...jugadoresAPI];

  return (
    <div className="container mt-4">
      <h1>Buscador de Jugadores de Rugby</h1>

      <AddPlayerForm onAdd={agregarJugadorManual} />

      <SearchBar onSearch={setBusqueda} />

      <div className="row g-4 mt-3">
        {jugadores.map(j => (
          <div className="col-md-4" key={j.idPlayer}>
            <PlayerCard jugador={j} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
