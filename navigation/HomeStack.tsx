import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import puzzles from './puzzlesList';
import { RootStackParamList } from './types'
import HomeScreen from '../screens/HomeScreen';
import ClassicScreen from '../screens/ClassicScreen';
import PuzzleScreen from '../screens/PuzzleScreen';

const HomeStack = createNativeStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => {
  const puzzlesScreens = [];
  for (let index in puzzles) {
    let pname = puzzles[index].name;
    let pid = puzzles[index].id;
    puzzlesScreens.push(<HomeStack.Screen
      name="Puzzle"
      component={PuzzleScreen}
      initialParams={{id: pid}}
    />)
  }
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="Classic" component={ClassicScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="Puzzle" component={PuzzleScreen} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;