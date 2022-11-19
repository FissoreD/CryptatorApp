import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import colors from './colors';
import styles from './style';
import Icons from '../font/Cryptator-fontello';

interface ColorProps {
  color: string,
  selectedColor: string,
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>,
  style?: any
  width?: number
}

const Color = (props: ColorProps) => {
  const { selectedColor, setSelectedColor } = props;

  const color = (props.color === "none") ? colors.lightgray : props.color;

  const borderColor = React.useMemo(
    () => (props.color === selectedColor ? colors.darkgray : color),
    [props.color, selectedColor]
  );

  const backgroundColor = (props.color === "none") ? colors.color : props.color;

  const onPlay = async () => {
    setSelectedColor(props.color);
    console.log(props.color)
  };

  const style = [styles.circle, styles.center, {borderColor: borderColor, backgroundColor: backgroundColor}];
  if (props.style) {
    style.push(props.style)
  }

  if (props.color === "none") {
    const size = (props.width) ? props.width : 56;
  
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

