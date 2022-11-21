import React from 'react';
import { SafeAreaView, StyleSheet, useWindowDimensions, View } from 'react-native';
import styles from '../components/style';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Props } from '../navigation/types';
import { TOOLS, COLOR_NONE } from '../components/constants';
import puzzles from '../navigation/puzzlesList';
import Puzzle from '../components/Puzzle'
import PressableLetter from '../components/Letter'
import { colors } from 'react-native-elements';

function PuzzleScreen({ route, navigation }: Props) {
  const { height, width } = useWindowDimensions();
  const [selectedNumbers, setSelectedNumbers] = React.useState<string[]>([""]);
  const [doneNumbers, setDoneNumbers] = React.useState<string[]>([""]);
  const [selectedColor, setSelectedColor] = React.useState<string>("");
  const [selectedTool, setSelectedTool] = React.useState<string>("");
  const [selectedLetter, setSelectedLetter] = React.useState<string>("");

  var lettersColor: string[] = [];

  const { index } = route.params;
  const puzzle = puzzles[index];

  for (let i in puzzle.letters) {
    lettersColor.push(COLOR_NONE)
  }

  console.log(puzzle.letters)
  console.log(lettersColor)

  const onPressLetter = async (letter: string) => {
    setSelectedLetter(letter)
    if (selectedTool === TOOLS.BUCKET) {
      if (selectedColor !== "") {
        // color the letter with the selected color

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
        setSelectedNumbers([""]); 
      } else {
        // if number not already in the selectedNumbers adds it
        setSelectedNumbers([number]);
      }
    } else if (selectedTool === TOOLS.PENCIL) {
      // selection of many numbers
      if (selectedNumbers.includes(number)) {
        // if number already in the selectedNumbers removes it
        setSelectedNumbers(selectedNumbers.filter(e => e !== number)); 
      } else if (selectedNumbers[0] === "") {
        setSelectedNumbers([number]);
      } else {
        // if number not already in the selectedNumbers adds it
        setSelectedNumbers(e => [...e, number])
      }
    } else if (selectedTool === TOOLS.BUCKET) {
      // No more selected numbers
      setSelectedNumbers([""])
    }
    console.log(number)
  };

  const onPressColor = (color: string) => {
    if (selectedTool === TOOLS.BUCKET) {
      // No more selected numbers
      setSelectedNumbers([""])
    }
    console.log(color)
  };

  const onPressTool = async (tool: string) => {
    if (selectedTool !== tool) {
      setSelectedNumbers([""])
    }
    console.log(tool)
  };

  return(
    <SafeAreaView style={styles.container}>
      <Header title = "Cryptator" width = {width} right = {true}/>
      <Puzzle equation = {puzzle.equation} max = {puzzle.max} letters = {puzzle.letters} {...{onPressLetter, selectedLetter, setSelectedLetter, lettersColor}} />
      <Footer {...{width, onPressNumber, onPressTool, doneNumbers, setDoneNumbers, selectedNumbers, setSelectedNumbers, selectedColor, setSelectedColor, selectedTool, setSelectedTool}} />
    </SafeAreaView>
    // <SafeAreaView style={styles.container}>
    //   <Header title = "Cryptator" width = {width} right = {true} onLayout = {onLayoutH}/>
    //   <View style = {[styles.center, {paddingTop: hauteur/2}]}>
    //     <View onLayout = {onLayoutB}>
    //       {components}
    //     </View>
    //   </View>
    //   <Footer onLayout = {onLayoutF} {...{width, doneNumbers, setDoneNumbers, selectedNumbers, setSelectedNumbers, selectedColor, setSelectedColor, selectedTool, setSelectedTool}} />
    // </SafeAreaView>
  );
};

export default PuzzleScreen;