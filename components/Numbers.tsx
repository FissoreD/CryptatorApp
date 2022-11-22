import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import colors from './colors';
import styles from './style';
import { TOOLS } from './constants';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { clearSelected, setSelected, setSelectedArray, addSelected, removeSelected, 
  clearDone, setDone, setDoneArray, addDone, removeDone  } from '../features/numberSlice'

interface NumberProps {
  name: string,
  style?: any
}

const Number = (props: NumberProps) => {
  const selectedNumbers = useAppSelector((state) => state.number.selected)
  const selectedTool = useAppSelector((state) => state.tool.value)
  const doneNumbers = useAppSelector((state) => state.number.done)
  const dispatch = useAppDispatch()

  const activeColor = doneNumbers.includes(props.name) ? colors.lightgray : selectedNumbers.includes(props.name) ? colors.color : colors.black;
  const activeBackgroundColor = selectedNumbers.includes(props.name) ? colors.black : colors.none;
  const activeBorderColor = doneNumbers.includes(props.name) ? colors.lightgray : colors.black;

  const style = [styles.circle, styles.center, {borderColor: activeBorderColor, backgroundColor: activeBackgroundColor}];
  if (props.style) {
    style.push(props.style)
  }

  const onPlay = async () => {
    if (selectedTool === TOOLS.PEN) {
      // selection of only one number
      if (selectedNumbers.includes(props.name)) {
        // if number already in the selectedNumbers removes it
        dispatch(clearSelected()); 
      } else {
        // if number not already in the selectedNumbers adds it
        dispatch(setSelected(props.name));
      }
    } else if (selectedTool === TOOLS.PENCIL) {
      // selection of many numbers
      if (selectedNumbers.includes(props.name)) {
        // if number already in the selectedNumbers removes it
        dispatch(removeSelected(props.name));
      } else {
        // if number not already in the selectedNumbers adds it
        dispatch(addSelected(props.name));
      }
    } else if (selectedTool === TOOLS.BUCKET) {
      // No more selected numbers
      dispatch(clearSelected()); 
    }
    console.log(props.name)
  };

  return (
    <Pressable style = {style} onPress={onPlay}>
      <Text style = {[styles.text, {color: activeColor}]}>{props.name}</Text>
    </Pressable>
  );
};

export default Number;

