import './App.css';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <LandingPage/>
        </Route>
        <Route path='/pokemons'>
          <Home/>
        </Route>
        <Route path='/pokemons:id'>
          <PokemonDetail/>
        </Route>
        <Route path='/pokemons/create'>
          <CreatePokemon/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
