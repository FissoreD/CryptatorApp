import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import colors from './colors';
import styles from './style';
import Icons from '../font/Cryptator-fontello';
import { COLOR_NONE, CIRCLE_SIZE, BORDER_SIZE } from './constants';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { changeColor } from '../features/colorSlice'

interface ColorProps {
  color: string,
  style?: any
  width?: number
}

const Color = (props: ColorProps) => {
  const selectedColor = useAppSelector((state) => state.color.value)
  const dispatch = useAppDispatch()

  const color = (props.color === COLOR_NONE) ? colors.lightgray : props.color;

  const borderColor = React.useMemo(
    () => (props.color === selectedColor ? colors.darkgray : color),
    [props.color, selectedColor]
  );

  const backgroundColor = (props.color === COLOR_NONE) ? colors.none : props.color;

  const onPlay = async () => {
    dispatch(changeColor(props.color))
    console.log(props.color)
  };

  const style = [styles.circle, styles.center, {borderColor: borderColor, backgroundColor: backgroundColor}];
  if (props.style) {
    style.push(props.style)
  }

  if (props.color === COLOR_NONE) {
    const size = (props.width) ? props.width : CIRCLE_SIZE - 2*BORDER_SIZE;
  
    return (
      <Pressable style = {style} onPress={onPlay}>
        <Icons name = 'times' size = {size} style = {[styles.center, {color: color}]} />
      </Pressable>
    );
  } else {
    return (
      <Pressable style = {style} onPress={onPlay} />
    );
  }
};

export default Color;

