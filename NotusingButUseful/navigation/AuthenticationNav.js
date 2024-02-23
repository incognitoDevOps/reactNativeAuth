// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import Navigation from './Navigation';

const Stack = createStackNavigator();

const AuthenticationNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Navigation/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthenticationNav;
