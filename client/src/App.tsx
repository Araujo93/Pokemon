import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import PokeInfo from "./components/pokemon/pokeInfo/PokeInfo";
import RegisterUser from "./components/auth/RegisterUser";
import Home from "./components/home/Home";
import Pokemon from "./components/pokemon/Pokemon";
import { BrowserRouter as Router } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import {
  fetchSecondGenPokemon,
  fetchThirdGenPokemon,
  fetchFirstGenPokemon,
} from "./redux/slices/pokemonSlice";

import LoginUser from "./components/auth/LoginUser";
import { RootState } from "./redux/store";

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const { pokemon } = useAppSelector((state: RootState) => state.pokemon);
  const { secondGen } = useAppSelector((state: RootState) => state.pokemon);
  const { thirdGen } = useAppSelector((state: RootState) => state.pokemon);

  useEffect(() => {
    const getFirstGenPokemon = async () => {
      await dispatch(fetchFirstGenPokemon());
    };
    const getSecondGenPokemon = async () => {
      await dispatch(fetchSecondGenPokemon());
    };
    const getThirdGenPokemon = async () => {
      await dispatch(fetchThirdGenPokemon());
    };
    getFirstGenPokemon();
    getThirdGenPokemon();
    getSecondGenPokemon();
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginUser} />
          <Route path="/register" component={RegisterUser} />
          <>
            <Navbar />
            <Route path="/home" component={Home} />
            <Route path="/about/:id" component={PokeInfo} />
            <Route path="/first" render={() => <Pokemon item={pokemon} />} />
            <Route
              path="/secondGen"
              render={() => <Pokemon item={secondGen} />}
            />
            <Route
              path="/thirdGen"
              render={() => <Pokemon item={thirdGen} />}
            />
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
