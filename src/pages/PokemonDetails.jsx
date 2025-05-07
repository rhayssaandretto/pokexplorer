import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from "../components/Button";
import PokemonAbilities from '../components/pokemonDetails/PokemonAbilities';
import PokemonTypes from '../components/pokemonDetails/PokemonTypes';
import usePokemonDetails from '../hooks/usePokemonDetails';
import "../styles/pokemonDetails.css";
import ErrorPage from './ErrorPage';

const PokemonDetails = () => {
  const { pokemon } = useParams();
  const { chosenPokemon, error } = usePokemonDetails(pokemon);

  if (error) return <ErrorPage />;

  return (
    <div className='searched-pokemon maxWidth'>
      <div className='searched-pokemon-header'>
        <Link to={"/"}>
          <Button label={"Back"} />
        </Link>
      </div>

      <div className='pokemon-details'>
        <div className='searched-pokemon-info'>
          <h4>{chosenPokemon?.name}</h4>
          <PokemonTypes types={chosenPokemon?.types} />
          <PokemonAbilities abilities={chosenPokemon?.abilities} />
        </div>

        <div className="previewImage">
          <img
            src={chosenPokemon?.sprites?.other?.home?.front_default}
            alt={chosenPokemon?.name}
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;