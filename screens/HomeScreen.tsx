import React from 'react';
import { SafeAreaView, Pressable, useWindowDimensions, View } from 'react-native';
import styles from '../components/style';
import { Props } from '../navigation/types';
import colors from '../components/colors';
import { Text } from 'react-native-elements';

function HomeScreen({ route, navigation }: Props) {
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.backgroundColor}]}>
      <Pressable
        style = {styles.full}
        onPress={() => {
            console.log("start")
            navigation.navigate('Menu')
          }
        }
      >
        <Text style = {styles.text}>Bienvenue dans</Text>
        <Text style = {styles.text}>Cryptator</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default HomeScreen;
