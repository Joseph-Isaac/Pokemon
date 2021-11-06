import React, { useEffect, useState } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image, AsyncStorage, Alert } from 'react-native'
import { TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'


import backgroundLogin from '../../assets/background_login.png'
import title from '../../assets/title.png'
import colors from '../../styles/colors'
import styles from './style'

const index = () => {

  const navigation = useNavigation();
  const [mail, setMail] = useState<string>('');
  const [password, setPasswrd] = useState<string>('');

  const signup = async () => {

    try {
      const mailAuth = await AsyncStorage.getItem('mail')
      const passwordAuth = await AsyncStorage.getItem('password')

      if(mailAuth !== undefined && mailAuth !== null){
        if(mailAuth !== mail){
          await AsyncStorage.setItem(
            'error', 'true'
          )
          return Alert.alert('Erro de usuário', 'Seu usuário não está cadastrado.\n\nLimpe o cache do app para cadastrar um novo usuário.')
        }else if(passwordAuth !== password){
          await AsyncStorage.setItem(
            'error', 'true'
          )
          return Alert.alert('Senha incorreta', 'Sua senha está incorreta.\n\nLimpe o cache do app para cadastrar um novo usuário.')
        }
      }
    } catch (error) {
      
    }

    if (mail.length < 3 || password.length < 3)
      return Alert.alert('Erro', 'Erro ao fazer login/signup. Tente novamente.')

    try {
      await AsyncStorage.setItem(
        'error', 'false'
      )
      await AsyncStorage.setItem(
        'mail', mail
      )
      await AsyncStorage.setItem(
        'password', password
      )
      navigation.navigate("Dashboard")
    } catch (error) {
      Alert.alert('Erro', 'Erro ao fazer login/signup. Tente novamente.')
    }

  }

  const getSignin = async () => {
    try {
      const mailAuth = await AsyncStorage.getItem('mail')
      const passwordAuth = await AsyncStorage.getItem('password')
      const error = await AsyncStorage.getItem('error')

      if(mailAuth !== undefined && mailAuth !== null && passwordAuth !== undefined && passwordAuth !== null && error === 'false'){
        navigation.navigate('Dashboard')
      }
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getSignin()
  }, [])

  return (
    <ImageBackground source={backgroundLogin} style={styles.container}>
      <Image source={title} style={styles.image} />
      <View style={styles.box}>
        <Text style={styles.title} >Bem-vindo</Text>
        <Text style={styles.subtitle}>Insira os seus dados para acessar</Text>
        <TextInput
          label="Email"
          style={styles.input}
          activeUnderlineColor={colors.underline}
          onChangeText={setMail}
        />
        <View>
          <TextInput
            label="Senha"
            style={styles.input}
            activeUnderlineColor={colors.underline}
            onChangeText={setPasswrd}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => signup()}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

export default index
