import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/nav/Navbar";
import PokemonList from "./components/pokemon/pokeList/PokemonList";
import { Route, Switch } from "react-router-dom";
import PokeInfo from "./components/pokemon/pokeInfo/PokeInfo";
import RegisterUser from "./components/auth/RegisterUser";
import Home from "./components/home/Home";
import SecondGenPokemon from "./components/pokemon/SecondGenPokemon";
import ThirdGenPokemon from "./components/pokemon/ThirdGenPokemon";
import { Link } from "react-router-dom";

import { useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";
import LoginUser from "./components/auth/LoginUser";

function App(): JSX.Element {
  const { isAuthenticated } = useAppSelector((state: RootState) => state.user);

  if (!isAuthenticated)
    return (
      <Switch>
        <Route path="/login" component={LoginUser} />
        <Route path="/register" component={RegisterUser} />
      </Switch>
    );
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={PokemonList} />
        <Route path="/login" component={LoginUser} />
        <Route path="/register" component={RegisterUser} />
        <Route path="/home" component={Home} />
        <Route path="/about/:id" component={PokeInfo} />
        <Route path="/secondGen" component={SecondGenPokemon} />
        <Route path="/thirdGen" component={ThirdGenPokemon} />
      </Switch>
    </div>
  );
}

export default App;
