function fetchData() {
  const pokemonName = document
    .getElementById("pokemonname")
    .value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not fetch resources");
      }
      return response.json();
    })
    .then((data) => {
      const spriteUrl = data.sprites.front_default;
      document.getElementById("pokemonsprite").src = spriteUrl;
    })
    .catch((error) => console.error(error));
}
