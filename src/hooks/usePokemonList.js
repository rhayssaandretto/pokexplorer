import { useEffect, useState } from "react";
import { fetchPokemons } from "../services/pokemonService";

const usePokemonList = (initialOffset = 0) => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(initialOffset);
  const [nextPageAvailable, setNextPageAvailable] = useState(false);
  const [previousPageAvailable, setPreviousPageAvailable] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemons(offset);
        setPokemons(data.results);
        setNextPageAvailable(data.next !== null);
        setPreviousPageAvailable(offset > 0);
      } catch (err) {
        setError("Failed to fetch Pokémon list.");
        console.error(err);
      }
    };

    fetchData();
  }, [offset]);

  const goToNextPage = () => {
    if (nextPageAvailable) setOffset((prev) => prev + 44);
  };

  const goToPreviousPage = () => {
    if (previousPageAvailable) setOffset((prev) => Math.max(0, prev - 44));
  };

  return {
    pokemons,
    offset,
    nextPageAvailable,
    previousPageAvailable,
    goToNextPage,
    goToPreviousPage,
    error,
  };
};

export default usePokemonList;
