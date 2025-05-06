import React from 'react';
import '../css/Feed.css';
import Card from './Card';

const Feed = ({ pokemons }) => {
    return (
        <section className='pokemon-feed'>
            {pokemons.map((pokemon, index) => (
                <Card key={index} data={pokemon} />
            ))}
        </section>
    );
};

export default Feed;
