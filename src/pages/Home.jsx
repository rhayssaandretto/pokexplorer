import React from "react";
import Feed from "../components/Feed";
import Header from "../components/Header";
import usePokemonList from "../hooks/usePokemonList";

const Home = () => {
  const {
    pokemons,
    nextPageAvailable,
    previousPageAvailable,
    goToNextPage,
    goToPreviousPage,
    error,
  } = usePokemonList();

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div className="Home maxWidth">
      <Header />
      <Feed pokemons={pokemons} />
      <div className="pagination">
        <button
          onClick={goToPreviousPage}
          className="bttn"
          disabled={!previousPageAvailable}
        >
          Previous
        </button>
        <button
          onClick={goToNextPage}
          className="bttn"
          disabled={!nextPageAvailable}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
