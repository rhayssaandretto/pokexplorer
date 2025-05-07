import { useEffect, useState } from "react";
import { fetchPokemonDetails } from "../services/pokemonService";

const usePokemonDetails = (pokemon) => {
  const [chosenPokemon, setChosenPokemon] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemonDetails(pokemon);
        setChosenPokemon(data);
      } catch (error) {
        setError(true);
      }
    };

    if (pokemon) {
      fetchData();
    }
  }, [pokemon]);

  return { chosenPokemon, error };
};

export default usePokemonDetails;
