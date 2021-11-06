import React from 'react'
import {} from 'react-native'

export const getAllPokemons = () => {
  fetch('https://pokeapi.co/api/v2/pokemon', {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(res=>res.json())
  .then(res=>console.log('pokemon api', res))
}