import React from 'react';
import { Link } from "react-router-dom";
import '../styles/feed.css';
import Card from './Card';


const Feed = ({ pokemons }) => {
    return (
        <section className='pokemon-feed'>
            {pokemons.map((pokemon) => (
                <Link to={`/${pokemon.name}`} key={pokemon.name}>
                    <Card data={pokemon} />
                </Link>
            ))}
        </section>
    );
};

export default Feed;
