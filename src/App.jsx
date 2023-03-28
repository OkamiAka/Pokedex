import PokemonCard from './components/PokemonCard'
import { useState } from "react";

const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
function App() {
  
  const [count, setCount] = useState(0);
  if(count===3){alert("pika pikachu !!!")}
  
  return (<>
    <div>
      <NavBar count={count} setCount={setCount}/>
      <PokemonCard pokemon={pokemonList[count]} />
    </div>
  </>)
}

function NavBar(props) {
  const suivant = () => {
    if (props.count < pokemonList.length - 1) { props.setCount(props.count + 1) }
  }
  const precedente = () => {
    if (props.count > 0) { props.setCount(props.count - 1) }
  }
  return (<>
      <button onClick={precedente}>précédente</button>
      <button onClick={suivant}>suivant</button>
      <br /><p>{props.count + 1}/{pokemonList.length}</p>
  </>);
}
{alert("hello pokemon trainer :)")}
export default App
