import React from 'react';

const PokemonImage = ({ image, name }) => (
    <div className="previewImage">
        <img src={image} alt={name} />
    </div>
);

export default PokemonImage;