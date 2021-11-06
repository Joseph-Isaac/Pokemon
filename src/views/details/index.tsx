import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './style'

import back from '../../assets/back.png'

interface Pokemon {
  abilities: Abilities[],
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

interface Evolution {
  baby_trigger_item: any,
  chain: Chain,
  id: number
}

interface Chain {
  evolution_details: Array<Object>,
  evolves_to: EvolvesTo[],
  is_baby: boolean,
  species: Abstract
}

interface EvolvesTo {
  evolution_details: EvolutionDetails[],
  evolves_to: EvolvesTo[] | EvolutionDetails[],
  is_baby: boolean,
  species: Abstract,
}

interface EvolutionDetails {
  gender: string,
  held_item: string,
  item: string,
  known_move: string,
  known_move_type: string,
  location: string,
  min_affection: string,
  min_beauty: string,
  min_happiness: string,
  min_level: string,
  needs_overworld_rain: string,
  party_species: string,
  party_type: string,
  relative_physical_stats: string,
  time_of_day: string,
  trade_species: string,
  trigger: Abstract,
  turn_upside_down: boolean

}

const index = (data, pokemonNumber) => {

  const navigation = useNavigation();
  const props = data.route.params;
  
  console.log('props details', props)

  const [menu, setMenu] = useState<string>('about') //about, stats, evolution
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [evolution, setEvolution] = useState<Evolution>();
  const [id, setId] = useState<string>()

  const houseLeftForNumber = () => {
    if ((pokemon?.id)?.toString().length < 2) {
      setId('000' + (pokemon?.id)?.toString())
    } else if ((pokemon?.id)?.toString().length < 3) {
      setId('00' + (pokemon?.id)?.toString())
    } else if ((pokemon?.id)?.toString().length < 4) {
      setId('0' + (pokemon?.id)?.toString())
    } else {
      setId((pokemon?.id)?.toString())
    }
  }

  const background = (type) => {
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

  const getEvolution = () => {
    fetch(`https://pokeapi.co/api/v2/evolution-chain/${props.id}/`
    )
      .then(res => res.json())
      .then(res => {
        console.log('evolution details', Object(res))
        setEvolution(Object(res))
      })
  }

  useEffect(() => {
    fetch(props.url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log('data details', Object(res))
        setPokemon(Object(res))
      })

    houseLeftForNumber();
    getEvolution();
  }, [])

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.back} source={back} />
      </TouchableOpacity>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>{pokemon?.name[0].toUpperCase() + pokemon?.name.substr(1)}</Text>
        <Text style={styles.id}>#{id !== undefined ? id : (pokemon?.id)?.toString()}</Text>
      </View>
      <ScrollView style={styles.scrollHorizontal} horizontal showsHorizontalScrollIndicator={false}>
        {pokemon?.types.map(types =>
          <View style={[styles.viewType, background(types.type.name)]}>
            <Text style={styles.type}>{types.type.name}</Text>
          </View>
        )}
      </ScrollView>
      <View style={[styles.viewPokemon, background(pokemon?.types[0].type.name)]}>
        <Image source={{ uri: pokemon?.sprites.front_default }} style={styles.pokemon} />
      </View>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuTitle} onPress={() => setMenu('about')}>
          <Text style={menu === 'about' ? styles.textSelected : styles.text}>Sobre</Text>
          <View style={menu === 'about' ? styles.lineSelected : styles.line} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuTitle} onPress={() => setMenu('stats')}>
          <Text style={menu === 'stats' ? styles.textSelected : styles.text}>Status</Text>
          <View style={menu === 'stats' ? styles.lineSelected : styles.line} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuTitle} onPress={() => setMenu('evolution')}>
          <Text style={menu === 'evolution' ? styles.textSelected : styles.text}>Evolução</Text>
          <View style={menu === 'evolution' ? styles.lineSelected : styles.line} />
        </TouchableOpacity>
      </View>
      {menu === 'about' &&
        <View style={styles.menuView}>
          <View style={styles.row}>
            <Text style={styles.subtitle}>Espécie</Text>
            <Text style={styles.titleMenu}>{pokemon?.species.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.subtitle}>Tamanho</Text>
            <Text style={styles.titleMenu}>{pokemon?.height}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.subtitle}>Habilidades</Text>
            {pokemon?.abilities.map(abilities =>
              <Text style={styles.titleMenu}>{abilities.ability.name}, </Text>
            )}
          </View>
          <View style={styles.row}>
            <Text style={styles.subtitle}>Peso</Text>
            <Text style={styles.titleMenu}>{pokemon?.weight}</Text>
          </View>
        </View>
      }
      {menu === 'stats' &&
        <View>
          {pokemon?.stats.map(stats =>
            <View style={styles.row}>
              <Text style={styles.subtitle}>{stats.stat.name[0].toUpperCase() + stats.stat.name.substr(1)}</Text>
              <Text style={styles.titleMenu}>{stats.base_stat}</Text>
            </View>
          )}
        </View>
      }

      {menu === 'evolution' &&
        <View style={styles.menuView}>
          <View style={styles.row}>
            <Text style={styles.subtitle}>É um bebê</Text>
            <Text style={styles.titleMenu}>{evolution?.chain.is_baby?'Sim':'Não'}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.subtitle}>Evolui para</Text>
            <Text style={styles.titleMenu}>{evolution?.chain.evolves_to[0].species.name[0].toUpperCase()+evolution?.chain.evolves_to[0].species.name.substr(1)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.subtitle}>Nível mínimo para evoluir</Text>
            <Text style={styles.titleMenu}>{evolution?.chain.evolves_to[0].evolution_details[0].min_level}</Text>
          </View>
        </View>
      }


    </ScrollView>
  )
}

export default index

