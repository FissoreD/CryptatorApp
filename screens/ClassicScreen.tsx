import React, { useState } from 'react';
import { SafeAreaView, View, Text, Pressable, useWindowDimensions } from 'react-native';
import styles from '../components/style';
import Header from '../components/Header';
import puzzles from '../navigation/puzzlesList';
import { Props } from '../navigation/types';
import colors from '../components/colors';
import Icons from '../font/Cryptator-fontello';

interface FavProps {
  name: string,
}

const FavIcon = (props: FavProps) =>  {
  const [name, setName] = useState(props.name);

  const onPress = () => {
    if (name === '') {
      setName("star_full")
      console.log("fav :)")
    } else if (name === 'tick') {
      console.log("nothing to do it is done")
    } else {
      setName("")
      console.log("no fav :(")
    }
  };

  return (
    <Pressable
      style = {styles.buttonRight}
      onPress={onPress}
    >
      <Icons name={name} size={50} style={{color: colors.color}} />
    </Pressable>
  );
};

function ClassicScreen({ route, navigation }: Props) {
  const { width } = useWindowDimensions();
  const buttons = [];
  for (let index in puzzles) {
    const tit = puzzles[index].name;
    const id = puzzles[index].id; 
    const name = (puzzles[index].done) ? "tick" : (puzzles[index].fav) ? "star_full" : ""; 
    buttons.push(<View key = {2*Number(index)} style = {styles.buttonList}>
        <Pressable
          style = {styles.buttonLeft}
          onPress={() => {
              console.log(puzzles[index].name)
              navigation.navigate('Puzzle')//, params:{ id: {id} }})
            }
          }
        >
          <Text style = {styles.text}>{tit}</Text>
        </Pressable>
        <FavIcon name = {name} />
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

export default ClassicScreen;
