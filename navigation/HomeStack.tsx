import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from './types'
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import ClassicScreen from '../screens/ClassicScreen';
import PuzzleScreen from '../screens/PuzzleScreen';

const HomeStack = createNativeStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="Classic" component={ClassicScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="Puzzle" component={PuzzleScreen} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;