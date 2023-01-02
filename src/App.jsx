import { Card } from "./components/card/Card";
import { useFetch } from "./hooks/useFetch";
import { useEffect, useState } from "react";

// const urlPoke = "https://pokeapi.co/api/v2/pokemon/";
// const urlLimite = "https://pokeapi.co/api/v2/pokemon?limit=5&offset=10";

function App() {
  // const { data, isFetching } = useFetch(url);
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  // useEffect(() => {
  //   fetch(urlLimite)
  //     .then((response) => response)
  //     .then((data) => data.json())
  //     .then((result) => setData(result))
  //     .finally(() => setIsFetching(false));
  //   }, []);
    
  console.log(JSON.parse(localStorage.getItem("poke")))

  return (
    <div className="App">
      {isFetching && <p> Carregando dados....</p>}


      {data["results"]?.map((pokemon, index) => {
        return (
          <div key={index}>
            <p>{pokemon.name}</p>
          </div>
        );
      })}
      {/* <img src={data.sprites.back_default} alt="" /> */}
    </div>
  );
}

export default App;
