import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import colors from './colors';
import styles from './style';
import { COLOR_NONE, TOOLS } from './constants'
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { changeLetter, setLetterColor } from '../features/letterSlice'

interface LetterProps {
  name: string,
  print?: string,
  onPressLetter: any,
  letters: string[],
  style?: any
}

export const Letter = (props: {name: string, style?: any}) => {
  const dispatch = useAppDispatch()

  const style = [styles.letter, styles.center];
  if (props.style) {
    style.push(props.style)
  }

  const onPlay = async () => {
    dispatch(changeLetter(""));
  };

  return (
    <Pressable style = {[styles.center, {borderWidth: 2, borderColor: colors.none}]} onPress={onPlay}>
      <Text style = {[style, {textAlign:"center", textAlignVertical: "center", color: colors.lightgray}]}>{props.name}</Text>
    </Pressable>
  );
};

const PressableLetter = (props: LetterProps) => {
  const selectedLetter = useAppSelector((state) => state.letter.value)
  const lettersColor = useAppSelector((state) => state.letter.lettersColor)
  const selectedTool = useAppSelector((state) => state.tool.value)
  const selectedColor = useAppSelector((state) => state.color.value)
  const dispatch = useAppDispatch()

  const [ annotations, setAnnotations ] = useState([""]); 
  const [ value, setValue ] = useState(""); 
  const [ color, setColor ] = useState(""); 


  const style = [styles.letter];
  if (props.style) {
    style.push(props.style)
  }

  const activeBorder = (selectedLetter === props.name) ? colors.black : colors.none;
  const pos = props.letters.indexOf(props.name)
  const activeColor =  (pos >= 0 && lettersColor[pos] !== COLOR_NONE) ? lettersColor[pos] : colors.lightgray;

  const onPlay = async () => {
    if (selectedLetter === props.name) {
      dispatch(changeLetter(""));
    } else {
      dispatch(changeLetter(props.name));
      if (selectedTool === TOOLS.BUCKET) {
        dispatch(setLetterColor({number: pos, value: selectedColor}));
      }
      props.onPressLetter(props.name);
    }
  };

  return (
    <Pressable style = {[styles.center, {borderWidth: 2, borderColor: activeBorder}]} onPress={onPlay}>
      <Text style = {[style, {textAlign: "center", textAlignVertical: "center", color: activeColor}]}>{props.name}</Text>
    </Pressable>
  );
};

export default PressableLetter;

