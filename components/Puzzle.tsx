import React from 'react';
import { StyleSheet, View } from 'react-native';
import styles from './style';
import { OPERATORS, COMPARATORS, COLOR_NONE } from './constants';
import PressableLetter, { Letter } from './Letter'
import { useAppSelector } from '../app/hooks';

interface PuzzleProps {
  equation: string[];
  max: number;
  onLayout?:any;
}

const Puzzle = (props: PuzzleProps) => {
  const components = [];
  let done = false
  const equation = props.equation;
  const { max } = props
  const letters = useAppSelector((state) => state.letter.letters)

  const localStyle = StyleSheet.create({
    row: {
      alignContent: "center", 
      alignItems: "center", 
      justifyContent: "flex-end",
    },
    letter: {
      height: 60, 
      width: 45, 
      fontSize: 50,
      fontweight: 600
    }
  });

  let operator = "";
  let key = 0;
  for (let i in equation) {
    if (Object.values<string>(OPERATORS).includes(equation[i])) {
      operator = equation[i];
    } else  if (Object.values<string>(COMPARATORS).includes(equation[i])) {
      operator = "";
      const toAddletters = [];
      if (equation[i] === COMPARATORS.EQ) {
        for (let j = 0; j < max; j++) {
          toAddletters.push(<Letter key = {key} name = "—" style = {localStyle.letter}/>);
          key++
        }
      }
      components.push(
        <View key = {Number(i)} style={[styles.row, localStyle.row]}>
          {toAddletters}
        </View>);
    } else {
      const toAddletters = [];
      let size = max
      if (operator !== "") {
        toAddletters.push(<Letter key = {key} name = {operator} style = {localStyle.letter}/>);
        key++
        toAddletters.push(<Letter key = {key} name = "" style = {localStyle.letter}/>);
        key++
        size -= 2
      }
      for (let j = 0; j <size - equation[i].length ; j++) {
        toAddletters.push(<Letter key = {key} name = "" style = {localStyle.letter}/>);
        key++
      }
      for (let j = 0; j < equation[i].length; j++) {
        toAddletters.push(<PressableLetter key = {key} name = {equation[i].charAt(j)} letters = {letters}  style = {localStyle.letter} />);
        key++
      }
      components.push(
        <View key = {Number(i)} style={[styles.row, localStyle.row]}>
          {toAddletters}
        </View>);
    }
  }

  return (
    <View style = {[styles.center, {paddingTop: 75}]}>
      <View>
        {components}
      </View>
    </View>
  );
};

export default Puzzle;
