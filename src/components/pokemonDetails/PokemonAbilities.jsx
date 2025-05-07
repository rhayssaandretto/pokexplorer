import React from 'react';

const PokemonAbilities = ({ abilities }) => (
    <div className="abilities">
        <h5>Abilities</h5>
        <div className="ability-list">
            {abilities?.map((abilityObj, index) => (
                <div
                    key={index}
                    className={`ability-box ${abilityObj.is_hidden ? "hidden" : ""}`}
                >
                    {abilityObj.ability.name}
                </div>
            ))}
        </div>
    </div>
);

export default PokemonAbilities;