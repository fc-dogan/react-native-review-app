import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails';
import * as React from 'react';

// const screens = {
//   Home: {
//     screen: Home
//   },
//   ReviewDetails: {
//     screen: ReviewDetails
//   },

// }

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={ReviewDetails} />
    </Stack.Navigator>
  </NavigationContainer>
);