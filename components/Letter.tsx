import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import colors from './colors';
import styles from './style';
import { COLOR_NONE } from './constants'

interface LetterProps {
  name: string,
  print?: string,
  onPressLetter: any,
  selectedLetter: string,
  setSelectedLetter: React.Dispatch<React.SetStateAction<string>>,
  letters: string[],
  lettersColor: string[],
  style?: any
}

export const Letter = (props: {name: string, style?: any}) => {

  const style = [styles.letter, styles.center];
  if (props.style) {
    style.push(props.style)
  }

  return (
    <Pressable style = {[styles.center, {borderWidth: 2, borderColor: colors.none}]}>
      <Text style = {[style, {textAlign:"center", textAlignVertical: "center", color: colors.lightgray}]}>{props.name}</Text>
    </Pressable>
  );
};

const PressableLetter = (props: LetterProps) => {
  const { selectedLetter, setSelectedLetter } = props;

  const [ annotations, setAnnotations ] = useState([""]); 
  const [ value, setValue ] = useState(""); 
  const [ color, setColor ] = useState(""); 


  const style = [styles.letter];
  if (props.style) {
    style.push(props.style)
  }

  const activeBorder = (selectedLetter === props.name) ? colors.black : colors.none;
  const pos = props.letters.indexOf(props.name)
  const activeColor =  (pos >= 0 && props.lettersColor[pos] !== COLOR_NONE) ? props.lettersColor[pos] : colors.lightgray;

  const onPlay = async () => {
    if (selectedLetter === props.name) {
      setSelectedLetter("");
    } else {
      setSelectedLetter(props.name);
      props.onPressLetter(props.name);
    }
  };

  return (
    <Pressable style = {[styles.center, {borderWidth: 2, borderColor: activeBorder}]} onPress={onPlay}>
      <Text style = {[style, {textAlign: "center", textAlignVertical: "center", color: colors.lightgray}]}>{props.name}</Text>
    </Pressable>
  );
};

export default PressableLetter;

