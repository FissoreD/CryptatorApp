import React, { useState } from 'react';
import { SafeAreaView, View, Text, Pressable, useWindowDimensions } from 'react-native';
import styles from '../components/style';
import Header from '../components/Header';
import { Props } from '../navigation/types';
import colors from '../components/colors';
import Icons from '../font/Cryptator-fontello';

interface Bouton {
  title: string;
}

const menuScreenButtons:Bouton[] = [
  {title : 'Classic'},
  {title : 'Crossword'},
  {title : '...'},
  {title : 'My library'},
  {title : 'Solver'}
]


function MenuScreen({ route, navigation }: Props) {
  const { width } = useWindowDimensions();
  const buttons = [];
  for (let index in menuScreenButtons) {
    const tit = menuScreenButtons[index].title;
    buttons.push(<View key = {2*Number(index)} style = {styles.button}>
        <Pressable
          onPress={() => {
              console.log(menuScreenButtons[index].title)
              navigation.navigate('Classic')//, params:{ id: {id} }})
            }
          }
        >
          <Text style = {styles.text}>{tit}</Text>
        </Pressable>
      </View>)
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

export default MenuScreen;
