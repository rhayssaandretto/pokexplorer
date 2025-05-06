import React, { useEffect, useState } from 'react';
import Feed from '../components/Feed';
import Header from '../components/Header';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  const [offset, setOffset] = useState(() => {
    const savedOffset = localStorage.getItem('offset');
    return savedOffset ? parseInt(savedOffset, 10) : 0;
  });

  const [nextPageAvailable, setNextPageAvailable] = useState(false);
  const [previousPageAvailable, setPreviousPageAvailable] = useState(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=44&offset=${offset}`);
        const data = await response.json();

        setPokemons(data.results);

        setNextPageAvailable(data.next !== null);
        setPreviousPageAvailable(offset > 0);

      } catch (error) {
        console.error("Erro ao buscar pokémons:", error);
      }
    };

    fetchPokemons();
  }, [offset]);

  function handleNextPage() {
    if (nextPageAvailable) {
      const newOffset = offset + 44;
      setOffset(newOffset);
      sessionStorage.setItem("offset", newOffset.toString());
    }
  }

  function handlePreviousPage() {
    if (previousPageAvailable) {
      const newOffset = Math.max(0, offset - 44);
      setOffset(newOffset);
      sessionStorage.setItem("offset", newOffset.toString());
    }
  }
  return (
    <div className='Home maxWidth'>
      <Header />
      <Feed pokemons={pokemons} />
      <div className='pagination'>
        <button onClick={handlePreviousPage} className='bttn' >Previous</button>
        <button onClick={handleNextPage} className='bttn'>Next</button>
      </div>
    </div>
  );
};

export default Home;
