import React from 'react';

const BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

function Pokecard(props) {
  let imgSrc = `${BASE_URL}${props.id}.png`;

  return (
    <div>
      <h2>{props.name}</h2>
      <img className="Pokecard-image" src={imgSrc} />
      <br />Type: {props.type}
      <br />EXP: {props.exp}
    </div>
  );
}

export default Pokecard;
