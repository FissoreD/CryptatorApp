import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import colors from './colors';
import styles from './style';
import { useAppSelector } from '../app/hooks';

interface NumberProps {
  name: string,
  onPressNumber: any,
  style?: any
}

const Number = (props: NumberProps) => {
  const selectedNumbers = useAppSelector((state) => state.number.selected)
  const doneNumbers = useAppSelector((state) => state.number.done)

  const activeColor = doneNumbers.includes(props.name) ? colors.lightgray : selectedNumbers.includes(props.name) ? colors.color : colors.black;
  const activeBackgroundColor = selectedNumbers.includes(props.name) ? colors.black : colors.none;
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

