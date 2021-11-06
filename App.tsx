import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from './src/views/signin'
import Dashboard from './src/views/dashboard'
import AuthRoutes from './src/routes'

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <AuthRoutes/>
  );
};

export default App;