import React from "react";
import "./App.css";
import pokemonData from "./pokemon/pokemon";

function GetAllPokemons() {
  let allPokemons = [];

  for (let i = 0; i < pokemonData.length; i++) {
    allPokemons.push(PokemonCard(pokemonData[i]));
  }

  return allPokemons;
}

function PokemonCard({ id, name, type, base }) {
  return (
    <div className="grid-item">
      <div>
        <img
          src={process.env.PUBLIC_URL + "pokemonImage/" + id + ".png"}
          className="photo"
          alt={name.english}
        />
      </div>
      <h2>{name.english}</h2>
      <div>{PrintTypes(type)}</div>
      <div>&nbsp;</div>
      <div>{PrintAbilities(base)}</div>
    </div>
  );
}

function PrintTypes(type) {
  return type.map((element) => {
    return <span className={"type-" + element.toLowerCase()}>{element}</span>;
  });
}

function PrintAbilities(base) {
  let abilities = [];

  Object.entries(base).map(([key, value]) => {
    const ability = (
      <div>
        {key}: {value}
      </div>
    );
    return abilities.push(ability);
  });

  return abilities;
}

function App() {
  return (
    <div className="App grid-container">
      <GetAllPokemons />
    </div>
  );
}

export default App;
