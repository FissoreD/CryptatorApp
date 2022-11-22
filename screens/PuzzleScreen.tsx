import React from 'react';
import { SafeAreaView, useWindowDimensions } from 'react-native';
import styles from '../components/style';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Props } from '../navigation/types';
import { TOOLS, COLOR_NONE } from '../components/constants';
import puzzles from '../navigation/puzzlesList';
import Puzzle from '../components/Puzzle';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { changeColor } from '../features/colorSlice'
import { clearSelected, setSelected, setSelectedArray, addSelected, removeSelected, 
  clearDone, setDone, setDoneArray, addDone, removeDone  } from '../features/numberSlice'
import { changeLetter, setLetterColor } from '../features/letterSlice'

function PuzzleScreen({ route, navigation }: Props) {
  const { height, width } = useWindowDimensions();

  const selectedColor = useAppSelector((state) => state.color.value)
  const selectedNumbers = useAppSelector((state) => state.number.selected)
  const doneNumbers = useAppSelector((state) => state.number.done)
  const selectedTool = useAppSelector((state) => state.tool.value)
  const selectedLetter = useAppSelector((state) => state.letter.value)
  const dispatch = useAppDispatch()

  var lettersColor: string[] = [];

  const { index } = route.params;
  const puzzle = puzzles[index];

  for (let i in puzzle.letters) {
    lettersColor.push(COLOR_NONE)
  }

  const onPressLetter = async (letter: string) => {
    dispatch(changeLetter(letter))
    if (selectedTool === TOOLS.BUCKET) {
      if (selectedColor !== "") {
        // color the letter with the selected color or remove the color ?
        console.log("+ Colors " + letter + " in " + selectedColor)
      }
    }
    console.log(letter)
  }

  const onPressNumber = (number: string) => {
    if (selectedTool === TOOLS.PEN) {
      // selection of only one number
      if (selectedNumbers.includes(number)) {
        // if number already in the selectedNumbers removes it
        dispatch(clearSelected()); 
      } else {
        // if number not already in the selectedNumbers adds it
        dispatch(setSelected(number));
      }
    } else if (selectedTool === TOOLS.PENCIL) {
      // selection of many numbers
      if (selectedNumbers.includes(number)) {
        // if number already in the selectedNumbers removes it
        dispatch(removeSelected(number));
      } else {
        // if number not already in the selectedNumbers adds it
        dispatch(addSelected(number));
      }
    } else if (selectedTool === TOOLS.BUCKET) {
      // No more selected numbers
      dispatch(clearSelected()); 
    }
    console.log(number)
  };

  const onPressColor = (color: string) => {
    if (selectedTool === TOOLS.BUCKET) {
      // No more selected numbers
      dispatch(clearSelected()); 
    }
    console.log(color)
  };

  const onPressTool = async (tool: string) => {
    if (selectedTool !== tool) {
      dispatch(clearSelected()); 
    }
    console.log(tool)
  };

  return(
    <SafeAreaView style={styles.container}>
      <Header title = "Cryptator" width = {width} right = {true}/>
      <Puzzle equation = {puzzle.equation} max = {puzzle.max} letters = {puzzle.letters} {...{onPressLetter, lettersColor}} />
      <Footer {...{width, onPressNumber, onPressTool}} />
    </SafeAreaView>
  );
};

export default PuzzleScreen;