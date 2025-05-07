import React from 'react';

const Card = ({ data }) => {
  const urlParts = data.url.split('/');
  const pokemonID = urlParts[urlParts.length - 2];
  const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonID}.png`;

  return (
    <div className="card">
      <img src={imageURL} alt={data.name} />
      <div className="text">
        <h4 className="name">
          <span className="pokemonID">{pokemonID}.</span>
          {data.name}
        </h4>
      </div>
    </div>
  );
};

export default Card