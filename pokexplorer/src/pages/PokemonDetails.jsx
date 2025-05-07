import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from "../components/Button";
import "../styles/pokemonDetails.css";
import colours from '../utils/typeColors';
import ErrorPage from './ErrorPage';

const PokemonDetails = () => {
  const { pokemon } = useParams();
  const [error, setError] = useState(false);
  const [chosenPokemon, setChosenPokemon] = useState([]);

  useEffect(() => {
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    async function fetchPokemon() {
      try {
        const response = await fetch(apiURL);

        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }

        const data = await response.json();
        setChosenPokemon(data);

      } catch (error) {
        setError(true);
      }
    }
    fetchPokemon()
  }, [pokemon]);

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
          <h4>
            {chosenPokemon.name}
          </h4>
          <div className="type">
            {chosenPokemon.types?.map((type, index) => (
              <span key={index} style={{ backgroundColor: colours[type.type.name] }} >
                {type.type.name}
              </span>
            ))}
          </div>

          <div className="abilities">
            <h5>Abilities</h5>
            <div className="ability-list">
              {chosenPokemon.abilities?.map((abilityObj, index) => (
                <div
                  key={index}
                  className={`ability-box ${abilityObj.is_hidden ? "hidden" : ""}`}
                >
                  {abilityObj.ability.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="previewImage">
          <img src={chosenPokemon.sprites?.other?.home?.front_default} alt={chosenPokemon.name} />
        </div>

      </div>

    </div>
  )
}

export default PokemonDetails