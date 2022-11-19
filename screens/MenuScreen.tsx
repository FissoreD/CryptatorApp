import React from 'react';
import { SafeAreaView, View, ScrollView, Text, Pressable, useWindowDimensions } from 'react-native';
import styles from '../components/style';
import Header from '../components/Header';
import { Props } from '../navigation/types';
import colors from '../components/colors';

interface Bouton {
  title: string;
}

const menuScreenButtons:Bouton[] = [
  {title : 'Classic'},
  {title : 'Crossword'},
  {title : '...'},
  {title : '...'},
  {title : '...'},
  {title : '...'},
  {title : '...'},
  {title : '...'},
  {title : '...'},
  {title : '...'},
  {title : '...'},
  {title : '...'},
  {title : '...'},  {title : '...'},
  {title : 'My library'},
  {title : 'Solver'}
]


function MenuScreen({ route, navigation }: Props) {
  const { width } = useWindowDimensions();
  const buttons = [];
  for (let index in menuScreenButtons) {
    const tit = menuScreenButtons[index].title;
    buttons.push(
      <View key = {Number(index)} style = {styles.pad10_20}>
        <Pressable  style = {[styles.button, styles.center]}
          onPress={() => {
              console.log(menuScreenButtons[index].title)
              navigation.navigate('Classic')//, params:{ id: {id} }})
            }
          }
        >
          <Text style = {styles.text}>{tit}</Text>
        </Pressable>
      </View>)
  }

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.backgroundColor}]}>
      <Header title = "Cryptator" width={width}/>
      <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{flexGrow: 1,}}>
        {buttons}
      </ScrollView>
    </SafeAreaView>
  );
}

export default MenuScreen;
