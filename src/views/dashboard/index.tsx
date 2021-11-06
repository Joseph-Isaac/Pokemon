import React, { useEffect, useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, Alert, Modal, ScrollView } from 'react-native'
import styles from './style'
import {useNavigation} from '@react-navigation/native'

import { getAllPokemons } from '../../services/api'

import List from '../../components/box'

import titleImage from '../../assets/title.png'
import menu from '../../assets/menu.png'
import close from '../../assets/close.png'
import closeCircle from '../../assets/close_circle.png'

interface MenuOptions {
  id: number,
  title: string,
  selected: boolean
}

interface Pokemon {
  name: string,
  url: any,
}

const index = () => {

  const navigation = useNavigation();

  const [search, setSearch] = useState<string>('');
  const [load, setLoad] = useState(true);
  const [data, setData] = useState<Array<Pokemon>>();
  const [menuData, setMenuData] = useState<Array<MenuOptions>>([
    {
      id: 0,
      title: 'Todos',
      selected: true
    },
    {
      id: 1,
      title: 'Água',
      selected: false
    },
    {
      id: 2,
      title: 'Fogo',
      selected: false
    },
    {
      id: 3,
      title: 'Planta',
      selected: false
    },
    {
      id: 4,
      title: 'Fada',
      selected: false
    },
    {
      id: 5,
      title: 'Fantasma',
      selected: false
    },
    {
      id: 6,
      title: 'Gelo',
      selected: false
    }
  ])
  const [modal, setModal] = useState(false);
  const [offset, setOffset] = useState(0)
  const [menuDataOld, setMenuDataOld] = useState<Array<MenuOptions>>();

  const handleSelected = (id: number) => {
    let menuDataTemp: Array<MenuOptions> = menuData;
    menuDataTemp[id].selected = !menuDataTemp[id].selected;
    setLoad(!load)
    setMenuData(menuDataTemp)
    //Alert.alert(title,`${menuData[id].selected}`)
    //setLoad(!load)
  }

  const handleClose = () => {
    setMenuData(menuDataOld)
    setModal(false)
    //Alert.alert('', JSON.stringify(menuDataOld))
    setLoad(!load)
  }

  const clearFilters = () => {
    let menuDataTemp: Array<MenuOptions> = menuData;
    menuDataTemp[0].selected = true;
    for (let id = 1; id < menuData.length; id++) {
      menuDataTemp[id].selected = false;
    }
    setLoad(!load)
    setMenuData(menuDataTemp)
  }

  const removeFilter = (id: number) => {
    let menuDataTemp: Array<MenuOptions> = menuData;
    menuDataTemp[id].selected = !menuDataTemp[id].selected;
    setLoad(!load)
    setMenuData(menuDataTemp)
    //Alert.alert(title,`${menuData[id].selected}`)
    //setLoad(!load)
  }

  

  const loadApiData = () => {

    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=40`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => {
      if(data!= undefined)
        setData([...data, ...res.results])
      else
        setData(res.results)
    })

    setOffset(offset+20);
    setLoad(!load)
  }

  const handleSearch = () => {
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => {
      console.log('pesquisa', Object(res))
      navigation.navigate('Details', {url: `https://pokeapi.co/api/v2/pokemon/${search}`, id:res.id})
    })
    .catch(error=>{
      console.log('pesquisa', error)
      Alert.alert('Nenhum resultado', 'Nenhum resultado foi encontrado para sua pesquisa. Certifique-se de que digitou o nome corretamente.')
      setSearch('');
    })
  }

  useEffect(() => {
    //https://pokeapi.co/api/v2/pokemon?offset=40&limit=20
    /*fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=40', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      setData(data.results)
    })*/

    loadApiData();
  }, [])

  return (
    <View style={styles.container}>
      <Modal
        transparent
        visible={modal}
        animationType="fade"
      >
        <View style={styles.modal}>
          <View style={styles.rowModal}>
            <Text style={styles.titleLarge}>Filtro</Text>
            <TouchableOpacity onPress={() => clearFilters()}>
              <Text style={styles.underline}>Limpar filtros</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeTouch} onPress={() => handleClose()}>
              <Image source={close} style={styles.closeIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.subtitle}>Tipo</Text>
          <FlatList
            style={styles.flatList}
            key={'#'}
            data={menuData}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={item.selected ? styles.buttonSelected : styles.button}
                  onPress={() => handleSelected(item.id)}
                >
                  <Text style={item.selected ? styles.textButton : {}}>{item.title}</Text>
                </TouchableOpacity>
              );
            }}
          />
          <TouchableOpacity style={styles.apply} onPress={() => { setModal(false); setMenuDataOld(menuData) }}>
            <Text style={styles.textButton}>Aplicar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Image source={titleImage} style={styles.titleImage} />
      <View style={styles.row}>
        <TextInput style={styles.input} defaultValue={search} placeholder="Buscar Pokémon" onChangeText={setSearch} onSubmitEditing={()=>handleSearch()}/>
        <TouchableOpacity style={styles.menuTouch} onPress={() => { setModal(true); setMenuDataOld(menuData) }}>
          <Image source={menu} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>
      {menuData.filter((item) => item.selected).length > 0 &&
        <ScrollView style={styles.scrollHorizontal} horizontal showsHorizontalScrollIndicator={false}>
          {menuData.filter((item) => item.selected).map((item) =>
            <TouchableOpacity style={styles.buttonFilter} onPress={() => removeFilter(item.id)}>
              <Text style={styles.textFilter}>{item.title}</Text>
              <Image style={styles.imageFilter} source={closeCircle} />
            </TouchableOpacity>
          )}
        </ScrollView>
      }
      <FlatList
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        data={data}
        key={'#'}
        numColumns={2}
        renderItem={({ item }) =>
          <List data={item} />
        }
        onEndReached={loadApiData}
        onEndReachedThreshold={0.3}
      />
    </View>
  )
}

export default index
