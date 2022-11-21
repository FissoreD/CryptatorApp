import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import colors from './colors';
import styles from './style';

interface NumberProps {
  name: string,
  selected: boolean,
  onPressNumber: any,
  done: boolean,
  selectedNumbers: string[],
  setSelectedNumbers: React.Dispatch<React.SetStateAction<string[]>>,
  doneNumbers: string[],
  setDoneNumbers: React.Dispatch<React.SetStateAction<string[]>>,
  tool?: string,
  style?: any
}

const Number = (props: NumberProps) => {
  const { selectedNumbers, setSelectedNumbers } = props;
  const { doneNumbers, setDoneNumbers } = props;

  const activeColor = doneNumbers.includes(props.name) ? colors.lightgray : selectedNumbers.includes(props.name) ? colors.color : colors.black;
  const activeBackgroundColor = selectedNumbers.includes(props.name) ? colors.black : colors.color;
  const activeBorderColor = doneNumbers.includes(props.name) ? colors.lightgray : colors.black;

  const style = [styles.circle, styles.center, {borderColor: activeBorderColor, backgroundColor: activeBackgroundColor}];
  if (props.style) {
    style.push(props.style)
  }

  const onPlay = async () => {
    props.onPressNumber(props.name);
  };

  return (
    <Pressable style = {style} onPress={onPlay}>
      <Text style = {[styles.text, {color: activeColor}]}>{props.name}</Text>
    </Pressable>
  );
};

export default Number;

