import "./App.css";
import React from "react";
import Navbar from "./components/nav/Navbar";
import PokemonList from "./components/pokemon/pokeList/PokemonList";
import { Route, Switch } from "react-router-dom";
import PokeInfo from "./components/pokemon/pokeInfo/PokeInfo";
import RegisterUser from "./components/auth/RegisterUser";
import Home from "./components/home/Home";
import SecondGenPokemon from "./components/pokemon/SecondGenPokemon";
import ThirdGenPokemon from "./components/pokemon/ThirdGenPokemon";

import { useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";

function App(): JSX.Element {
  let { token } = useAppSelector((state: RootState) => state.user);
  if (!token) {
    return <RegisterUser />;
  }

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={PokemonList} />
        <Route path="/home" component={Home} />
        <Route path="/about/:id" component={PokeInfo} />
        <Route path="/secondGen" component={SecondGenPokemon} />
        <Route path="/thirdGen" component={ThirdGenPokemon} />
      </Switch>
    </div>
  );
}

export default App;
