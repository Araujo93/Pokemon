import './App.css';
import Navbar from './components/nav/Navbar';
import PokemonList from './components/pokemon/PokemonList';
import {Route, Switch } from 'react-router-dom';
import PokeInfo from './components/pokemon/pokeInfo/PokeInfo';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/" component={PokemonList} />
      <Route path="/home" component={Home} />
      <Route path="/about/:id" component={PokeInfo} />
      </Switch>
    </div>
  );
}

export default App;
