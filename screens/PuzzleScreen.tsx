import React from 'react';
import { Pressable, SafeAreaView, useWindowDimensions } from 'react-native';
import styles from '../components/style';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Props } from '../navigation/types';
import { COLOR_NONE } from '../components/constants';
import puzzles from '../navigation/puzzlesList';
import Puzzle from '../components/Puzzle';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { changeLetter, setLetterColor, setLetters, setName } from '../features/letterSlice'

function PuzzleScreen({ route, navigation }: Props) {
  const name = useAppSelector((state) => state.letter.name)
  const dispatch = useAppDispatch()

  const { index } = route.params;
  const puzzle = puzzles[index];

  if (name !== puzzle.name) {
    console.log("+ The letters are " + puzzle.letters)
    dispatch(setName(puzzle.name))
    dispatch(setLetters(puzzle.letters))

    for (let i in puzzle.letters) {
      dispatch(setLetterColor({number: Number(i), value: COLOR_NONE}))
    }
  }
  
  return(
    <SafeAreaView style={styles.container}>
      <Pressable
        style = {[styles.full]}
        onPress={() => {
            dispatch(changeLetter(""))
          }
        }
      >
        <Header title = "Cryptator" right = {true}/>
        <Puzzle equation = {puzzle.equation} max = {puzzle.max} />
        <Footer />
      </Pressable>
    </SafeAreaView>
  );
};

export default PuzzleScreen;