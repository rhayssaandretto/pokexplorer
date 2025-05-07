const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const fetchPokemons = async (offset, limit = 44) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}?limit=${limit}&offset=${offset}`
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching pokemons:", error);
    throw error;
  }
};

export const fetchPokemonDetails = async (pokemon) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${pokemon}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching pokemon details:", error);
    throw error;
  }
};
