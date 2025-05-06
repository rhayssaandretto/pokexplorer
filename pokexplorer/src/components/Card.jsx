import React from 'react';

const Card = ({ data }) => {
  const urlParse = data.url.split('/');
  const pokemonID = urlParse[urlParse.length - 2];
  const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonID}.png`;

  return (
    <div className="card">
      <img src={imageURL} alt={data.name} />
      <div className='text'>
        <span className='pokemonID'>{pokemonID}.</span>{data.name}
      </div>
    </div >
  )
}

export default Card