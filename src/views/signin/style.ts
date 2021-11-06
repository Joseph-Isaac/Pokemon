import { StyleSheet } from 'react-native'
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  image:{
    width: 252,
    height: 88,
    resizeMode:'contain',
    marginBottom:72,
  },
  box:{
    backgroundColor:colors.white,
    width: 339,
    height: 385,
    borderRadius:8,
    
    alignItems:'center'
  },
  input:{
    width: 300,
    height: 56,
    backgroundColor:colors.gray,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginTop:30,
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    width: 300,
    height: 56,
    backgroundColor:colors.button,
    borderRadius: 8,
    marginTop:40,
  },
  title:{
    fontSize:24,
    fontWeight:'600',
    width: 300,
    color: colors.black,
    marginTop:30,
  },
  subtitle:{
    fontSize:14,
    fontWeight:'300',
    width: 300,
    color: colors.black,
  },
  textButton:{
    fontSize:16,
    fontWeight:'700',
    color: colors.white,
  },
})

export default styles;