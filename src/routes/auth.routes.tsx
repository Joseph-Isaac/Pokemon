import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../views/signin'
import Dashboard from '../views/dashboard'
import Details from '../views/details'


const Stack = createStackNavigator()

function AuthRoutes() {
  return (
    <Stack.Navigator
    screenOptions={{
      header:()=><></>
    }}
    >
      <Stack.Screen
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
      />
      <Stack.Screen
        name="Details"
        component={Details}
      />
    </Stack.Navigator>
  );
}

export default AuthRoutes;