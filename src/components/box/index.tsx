import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import colors from '../../styles/colors';
import styles from './style'

interface Pokemon {
  abilites: Abilities[],
  base_experience: number,
  forms: Abstract[],
  game_indices: GameIndices[],
  height: number,
  held_items: Array<Object>,
  id: number,
  is_default: boolean,
  location_area_encounters: string,
  moves: Moves[],
  name: string,
  order: number,
  past_types: Array<Object>,
  species: Abstract,
  sprites: Sprites,
  stats: Stats[],
  types: Types[],
  weight: number,
}

interface Abilities {
  ability: Abstract,
  is_hidden: boolean,
  slot: number
}

interface Abstract {
  name: string,
  url: string
}

interface GameIndices {
  game_index: string,
  version: Abstract,
}

interface Moves {
  move: Abstract,
  version_group_details: VersionGroupDetails[],
}

interface VersionGroupDetails {
  level_learned_at: number,
  move_learn_method: Abstract,
  version_group: Abstract
}

interface Sprites {
  back_default: string,
  back_female: string,
  back_shiny: string,
  back_shiny_female: string,
  front_default: string,
  front_female: string,
  front_shiny_female: string,
  other: Object,
  versions: Object,
}

interface Stats {
  base_stat: number,
  effort: number,
  stat: Abstract,
}

interface Types {
  slot: number,
  type: Abstract
}

const index = ({ data }) => {

  const navigation = useNavigation();

  //const props: Pokemon = data;
  const pokemonNumber = (data.url).replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
  const [backgroundColor, setBackgroundColor] = useState<string>()
  const [pokemon, setPokemon] = useState<Pokemon>()
  const imageURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemonNumber + '.png'
  //As imagens poderiam estar numa melhor qualidade se essa api específica ainda estivesse funcionando
  //const imageURL = 'https://pokeres.bastionbot.org/images/pokemon/'+pokemonNumber+'.png'

  const background = (type) => {

    //Esse mecanismo funcionaria para colocar um background diferente para cada tipo de pokemon, porém a leitura da API demora 
    //a carregar, é necessário fazer um delay na renderização até carregarem todos os dados.
    switch (type) {
      case 'steel':
        return styles.steel;
        break;
      case 'fire':
        return styles.fire;
        break;
      case 'grass':
        return styles.grass;
        break;
      case 'electric':
        return styles.electric;
        break;
      case 'water':
        return styles.water;
        break;
      case 'ice':
        return styles.ice;
        break;
      case 'ground':
        return styles.ground;
        break;
      case 'rock':
        return styles.rock;
        break;
      case 'fairy':
        return styles.fairy;
        break;
      case 'poison':
        return styles.poison;
        break;
      case 'bug':
        return styles.bug;
        break;
      case 'dragon':
        return styles.dragon;
        break;
      case 'psychic':
        return styles.psychic;
        break;
      case 'flying':
        return styles.flying;
        break;
      case 'fighting':
        return styles.fighting;
        break;

      default:
        return styles.normal;
        break;
    }
  }

  useEffect(() => {
    console.log('box console', 'useEffect console box')
    fetch(data.url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        setPokemon(Object(res))
        if(res.results?.types[0].type.name !==undefined)
          setBackgroundColor(Object(res.results?.types[0].type.name))
        else
          setBackgroundColor('dragon')
        console.log('backgroundColor', pokemon)
      })
  }, [])

  return (
    <TouchableOpacity
      style={[styles.button, background('dragon')]}
      onPress={() => navigation.navigate('Details', { url: data.url, id: pokemonNumber })}
    >
      <Image style={styles.image} source={{ uri: imageURL }} />
      <View style={styles.containerName}>
        <Text style={styles.name}>{(data.name[0].toUpperCase() + (data.name).substr(1))}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default index
