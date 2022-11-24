import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import HomeStackNavigator from './HomeStack';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { setDimensions } from '../features/windowSlice'

function setWindowDimensions() {
  const dispatch = useAppDispatch()
  const wwidth = useAppSelector((state) => state.window.width)
  const { height, width } = useWindowDimensions();
  if (wwidth !== width) {
    dispatch(setDimensions({height, width}))
  }
}

const RootNavigator = () => {
  setWindowDimensions()
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;