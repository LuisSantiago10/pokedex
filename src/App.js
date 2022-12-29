import './App.css';
import Searcher from './components/Searcher';
import { Col } from 'antd';
import PokemonList from './components/PokemonList';
import logo from './static/logo.svg';
import { useEffect } from 'react';
import { getPokemon, getPokemonDetails } from './api';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonWithDetails, setPokemons } from './actions';

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect( () => {
    const fetchPokemon = async() => {
      const pokemonRes = await getPokemon();
      dispatch(getPokemonWithDetails(pokemonRes ));
    };
    fetchPokemon();
  }, []);


  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux"/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

export default (App);
