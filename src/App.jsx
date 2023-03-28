import PokemonCard from './components/PokemonCard'
import { useState } from "react";
import './App.css'

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    color: "lightgreen",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    color: "lightsalmon",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    color: "lightblue",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    color: "yellow",
  },
  {
    name: "mew",
  },
];
function App() {


  const [count, setCount] = useState(0);



  return (
    <div>
      <NavBar setCount={setCount} />
      <PokemonCard pokemon={pokemonList[count]} />
    </div>
  )
}

function NavBar(props) {
  return (<>
    {pokemonList.map((pokemon, index) => (
      <button onClick={() => { props.setCount(index) }} key={pokemon.name}>{pokemon.name}</button>
    ))}
  </>);

}
export default App
