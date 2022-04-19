import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import PokemonList from "./components/pokemon/pokeList/PokemonList";
import { Route, Switch } from "react-router-dom";
import PokeInfo from "./components/pokemon/pokeInfo/PokeInfo";
import RegisterUser from "./components/auth/RegisterUser";
import Home from "./components/home/Home";
import Pokemon from "./components/pokemon/Pokemon";
import { BrowserRouter as Router } from "react-router-dom";
import { IPokemon } from "./interfaces/interfaces";

import LoginUser from "./components/auth/LoginUser";

function App(): JSX.Element {
  const [secondGenPokemon, setSecondGenPokemon] = useState<IPokemon[]>([]);
  const [thirdGenPokemon, setThirdGenPokemon] = useState<IPokemon[]>([]);

  useEffect(() => {
    const getSecondGenPokemon = async () => {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?offset=151&limit=100"
      );
      const data = await res.json();
      setSecondGenPokemon(data.results);
    };
    const getThirdGenPokemon = async () => {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?offset=251&limit=135"
      );
      const data = await res.json();
      setThirdGenPokemon(data.results);
    };
    getThirdGenPokemon();
    getSecondGenPokemon();
  }, [secondGenPokemon, thirdGenPokemon]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginUser} />
          <Route path="/register" component={RegisterUser} />
          <>
            <Navbar />

            <Route path="/first" component={PokemonList} />
            <Route path="/home" component={Home} />
            <Route path="/about/:id" component={PokeInfo} />
            <Route
              path="/secondGen"
              render={() => <Pokemon item={secondGenPokemon} />}
            />
            <Route
              path="/thirdGen"
              render={() => <Pokemon item={thirdGenPokemon} />}
            />
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
