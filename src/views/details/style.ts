import { StyleSheet } from 'react-native'
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 28,
  },

  back: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },

  viewTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 23,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.black,
  },

  id: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
  },

  scrollHorizontal: {
    width: '100%',
    marginTop: 10,
    maxHeight: 40,
  },

  viewType: {
    minWidth: 50,
    maxWidth: 100,
    marginLeft: 10,
    flexDirection: 'column',
    paddingHorizontal: 5,
    height: 28,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },

  type: {
    color: colors.white,
    fontSize: 14,
  },

  viewPokemon: {
    width: 324,
    height: 190,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 72,
  },

  pokemon: {
    marginTop: -100,
    width: 300,
    height: 300,
    resizeMode: 'stretch',
  },

  menu: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    marginVertical: 20,
  },

  menuView: {
    width: '100%',

  },

  row: {
    flexDirection: 'row',
    marginTop: 10,
  },

  menuTitle: {
    alignItems: 'center',
    width: '33%',
  },

  textSelected: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
  },

  text: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.gray_text,
  },

  subtitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.gray_text,
    width: 150,
  },

  titleMenu: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.black,
    flexShrink: 1,
    flexWrap: 'wrap',
  },

  lineSelected: {
    marginTop: 10,
    width: '100%',
    height: 2,
    backgroundColor: colors.red
  },

  line: {
    marginTop: 13,
    width: '100%',
    height: 1,
    backgroundColor: colors.gray_text
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
