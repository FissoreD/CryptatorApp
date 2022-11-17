import React from 'react';
import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

//If importing icon set directly into App.tsx
import { createIconSet } from '@expo/vector-icons';
const Icon = createIconSet(glyphMap, 'cryptator', 'cryptator.ttf');

import glyphMap from './cryptator.json';

export default props => {
  let [fontsLoaded] = useFonts({
    'cryptator': require('./cryptator.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       {Object.keys(glyphMap).map((icon, i) => (
        <>
        <Icon name={icon} size={50} tvParallaxProperties={undefined}/>
        <Text>{icon}</Text>
        </>
       ))}
      </View>
    );
  }
};