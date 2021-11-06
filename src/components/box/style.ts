import { StyleSheet } from 'react-native'
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  button: {
    width: 150,
    maxWidth: 150,
    height: 100,
    borderRadius: 20,
    flexGrow: 1,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20,
    margin: 22,
  },

  image: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
    marginTop:-50,
  },

  containerName: {
    backgroundColor: colors.gray_dark,
    width: 125,
    height: 25,
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center'
  },

  name: {
    color: colors.white,
    fontWeight:'800',
    fontSize:12,
  },

  steel: {
    backgroundColor: '#E388B6',
  },

  fire: {
    backgroundColor: '#EA7C7C',
  },

  grass: {
    backgroundColor: '#487D4C',
  },

  electric: {
    backgroundColor: '#7D7448',
  },

  water: {
    backgroundColor: '#486C7D',
  },

  ice: {
    backgroundColor: '#93DBFD',
  },

  ground: {
    backgroundColor: '#F7C491',
  },

  rock: {
    backgroundColor: '#57573D',
  },

  fairy: {
    backgroundColor: '#784F80',
  },

  poison: {
    backgroundColor: '#24572E',
  },

  bug: {
    backgroundColor: '#F9B65A',
  },

  dragon: {
    backgroundColor: '#5489EA',
  },

  psychic: {
    backgroundColor: '#EBF05B',
  },

  flying: {
    backgroundColor: '#F96363',
  },

  fighting: {
    backgroundColor: '#66593F',
  },

  normal: {
    backgroundColor: '#755252',
  },
})

export default styles;