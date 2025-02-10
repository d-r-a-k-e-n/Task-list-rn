import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
// import {Ionicons} from 'react-native-vector-icons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/screens/HomeScreen';
import ActiveScreen from './src/screens/ActiveScreen';
import ComplitedScreen from './src/screens/ComplitedScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          // tabBarIcon: ({color, size}) => {
          //   let iconName;

          //   if (route.name === 'Home') {
          //     iconName = 'home-outline'; // Іконка для головної сторінки
          //   } else if (route.name === 'Active') {
          //     iconName = 'list-outline'; // Іконка для активних завдань
          //   } else if (route.name === 'Complited') {
          //     iconName = 'checkmark-done-outline'; // Іконка для завершених завдань
          //   }

          //   return <Ionicons name={iconName} size={size} color={color} />;
          // },
          tabBarActiveTintColor: '#007bff',
          tabBarInactiveTintColor: 'gray',
          keyboardHidesTabBar: true,
          tabBarHideOnKeyboard: true,
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Active"
          component={ActiveScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Complited"
          component={ComplitedScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
