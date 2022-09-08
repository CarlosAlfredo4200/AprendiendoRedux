import React, { useEffect, useState } from 'react'


import './App.css';
import {  useDispatch } from 'react-redux'
import { fetchPokemons } from './redux/actions/pokemons';


function App( props ) {

  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState([]);


  useEffect(() => {
    if(pokemons.length === 0){
      dispatch(fetchPokemons());
      setPokemons([{}, {}]);
    }
  },[pokemons.length, dispatch])
  


  return (
    <div className="App">
      <h1>Aprendiendo REDUX</h1>
    </div>
  );
}

export default App;
