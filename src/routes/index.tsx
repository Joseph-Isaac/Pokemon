import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { StatusBar } from 'react-native'
import AuthRoutes from './auth.routes';

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content'/>
      <AuthRoutes/>
    </NavigationContainer>
  )
}
