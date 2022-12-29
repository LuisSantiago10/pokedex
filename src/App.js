import './App.css';
import Searcher from './components/Searcher';
import { Col, Spin } from 'antd';
import PokemonList from './components/PokemonList';
import logo from './static/logo.svg';
import { useEffect } from 'react';
import { getPokemon } from './api';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonWithDetails, setLoading} from './actions';

function App() {
  const pokemons = useSelector((state) => state.get('pokemons')).toJS();
  // const loading = useSelector((state) => state.loading);
  const loading = useSelector((state) => state.get('loading'));
  // const loading = false;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemon = async () => {
      dispatch(setLoading(true));
      const pokemonRes = await getPokemon();
      dispatch(getPokemonWithDetails(pokemonRes));
      dispatch(setLoading(false));
    };
    fetchPokemon();
  }, []);


  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {
        loading ?
          <Col offset={12}>
            <Spin spinning size='large' />
          </Col>
          :
          <PokemonList pokemons={pokemons} />
      }
    </div>
  );
}

export default (App);
