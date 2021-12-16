import "./App.css";
import Navbar from "./components/navbar/Navbar";
import PokemonList from "./components/pokemon/pokeList/PokemonList";
import { Route, Switch } from "react-router-dom";
import PokeInfo from "./components/pokemon/pokeInfo/PokeInfo";
import RegisterUser from "./components/auth/RegisterUser";
import Home from "./components/home/Home";
import SecondGenPokemon from "./components/pokemon/SecondGenPokemon";
import ThirdGenPokemon from "./components/pokemon/ThirdGenPokemon";
import { BrowserRouter as Router } from "react-router-dom";

import LoginUser from "./components/auth/LoginUser";

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LoginUser} />
          <Route path="/first" component={PokemonList} />
          <Route path="/register" component={RegisterUser} />
          <Route path="/home" component={Home} />
          <Route path="/about/:id" component={PokeInfo} />
          <Route path="/secondGen" component={SecondGenPokemon} />
          <Route path="/thirdGen" component={ThirdGenPokemon} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
