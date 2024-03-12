import { useEffect, useState } from 'react';
import './App.css';
import { getAllPokemon } from './utils/pokemon';
import axios from 'axios';

function App() {
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async() => {
      //全てのポケモンデータ取得

      //axiosバージョンやってみた
      // let res = await axios.get(initialUrl);
      // console.log(res.data);

      let res = await getAllPokemon(initialUrl);
      console.log(res);
      setLoading(false);
    }
    fetchPokemonData();
  }, [])

  return (
    <div className="App">
      {loading ? (
        <h1>ロード中</h1>
      ) : (
        <h1>取得しました</h1>
      )}
    </div>
  );
}

export default App;
