export const buscarJugadores = async (nombre) => {
  const response = await fetch(
    `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${nombre}`
  );
  const data = await response.json();

  return data.player || [];
};
