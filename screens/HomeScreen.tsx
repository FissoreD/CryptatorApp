import React from 'react';
import { SafeAreaView, Pressable, useWindowDimensions, View } from 'react-native';
import styles from '../components/style';
import Header from '../components/Header';
import { Props } from '../navigation/types';
import colors from '../components/colors';
import { Text } from 'react-native-elements';

interface Bouton {
  title: string;
}

const homescreenbuttons:Bouton[] = [
  {title : 'Classic'},
  {title : 'Crossword'},
  {title : '...'},
  {title : 'My library'},
  {title : 'Solver'}
]

function HomeScreen({ route, navigation }: Props) {
  const { width } = useWindowDimensions();
  const buttons = [];
  for (let index in homescreenbuttons) {
    const tit = homescreenbuttons[index].title;
    buttons.push(<Pressable
      key = {2*Number(index)}
      style = {styles.button}
      onPress={() => {
          console.log(homescreenbuttons[index].title)
          navigation.navigate('Classic')
        }
      }
    >
      <Text style = {styles.text}>{tit}</Text>
    </Pressable>)
    buttons.push(<View key = {2*Number(index) + 1} style = {styles.blank}></View>)
  }

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.backgroundColor}]}>
      <Header title = "Cryptator" width={width}/>
      <View style = {styles.list}>
        {buttons}
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
