// navigation/Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import MyStatusScreen from '../screens/MyStatusScreen';
import LearningScreen from '../screens/LearningScreen';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'AboutUs') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            } else if (route.name === 'MyStatus') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Learning') {
              iconName = focused ? 'book' : 'book-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        screenOption={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
          style: {
            display: 'flex',
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Learning" component={LearningScreen} />
        <Tab.Screen name="AboutUs" component={AboutUsScreen} />
        <Tab.Screen name="MyStatus" component={MyStatusScreen} />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
};

export default Navigation;
