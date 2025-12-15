export async function buscarJugadores(nombre) {
  if (!nombre) return [];

  const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${nombre}`;

  const res = await fetch(url);
  const data = await res.json();

  // Si no encuentra jugadores devuelve null, lo convertimos en []
  return data.player || [];
}
