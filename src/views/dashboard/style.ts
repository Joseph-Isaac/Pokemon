import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center'
  },

  modal: {
    flexDirection: 'column',
    width: 316,
    height: '100%',
    position: 'absolute',
    right: 0,
    paddingLeft: 25,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  titleImage: {
    width: 117,
    height: 43,
    resizeMode: 'contain',
    marginTop: 17
  },

  row: {
    flexDirection: 'row',
    width: 340,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 24,
  },

  rowModal: {
    flexDirection: 'row',
    width: 330,
    marginRight: 20,
    right: 10,
    alignItems: 'baseline',
    marginTop: 24,
    marginLeft: 10,
  },

  flatList: {
    flexBasis: 0,
    width: '100%',
  },

  buttonSelected: {
    width: 127,
    maxWidth: 127,
    height: 40,
    borderRadius: 4,
    backgroundColor: colors.button,
    flexGrow: 1,
    marginRight: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    width: 127,
    maxWidth: 127,
    height: 40,
    borderRadius: 4,
    backgroundColor: colors.gray,
    flexGrow: 1,
    marginRight: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scrollHorizontal2: {
    backgroundColor: '#aac',
    marginTop: 10,
    width: 100,
    height: 100,
  },

  scrollHorizontal: {
    width: '100%',
    marginTop: 10,
    maxHeight: 32,
  },

  buttonFilter: {
    width: 92,
    height: 32,
    borderRadius: 40,
    marginLeft:10,
    paddingHorizontal: 5,
    backgroundColor: colors.gray,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  textFilter: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.black,
  },

  imageFilter: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginTop: 2,
  },

  apply: {
    backgroundColor: colors.button,
    justifyContent: 'center',
    alignItems: 'center',
    width: 265,
    height: 44,
    marginBottom: 10,
    borderRadius: 4,
  },

  input: {
    width: 300,
    height: 46,
    borderRadius: 30,
    backgroundColor: colors.gray,
    textAlign: 'center'
  },

  menuTouch: {
    width: 16,
    height: 18,
    marginLeft: 20,
  },

  menuIcon: {
    width: 16,
    height: 18,
    resizeMode: 'contain'
  },

  titleLarge: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.black,
  },

  subtitle: {
    marginTop: 41,
    marginBottom: 23,
    color: colors.black,
    fontSize: 16,
    fontWeight: '600'
  },

  underline: {
    color: colors.blue,
    textDecorationLine: 'underline',
    paddingBottom: 4,
    marginLeft: 11,
  },

  closeTouch: {
    paddingBottom: 25,
    width: 14,
    height: 14,
    marginLeft: 84,
    backgroundColor: colors.white,
  },

  closeIcon: {
    paddingBottom: 25,
    width: 14,
    height: 14,
    resizeMode: 'contain',
    backgroundColor: colors.white,
  },

  textButton: {
    fontSize: 16,
    color: colors.white,
  },

})

export default styles