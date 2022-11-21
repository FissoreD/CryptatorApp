import React from 'react';
import { View } from 'react-native';
import styles from './style';
import Color from './Color';
import colors from './colors';
import { COLOR_NONE, CIRCLE_SIZE, BORDER_SIZE } from './constants';

interface Props {
  width: number,
  selectedColor: string,
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>
}

const colorsCircles = [colors.blue, colors.violet, colors.pink, colors.red, 
  colors.darkblue, colors.darkgreen, colors.green, colors.yellow, colors.orange]

const ColorFooter = (props: Props) => {
  const { selectedColor, setSelectedColor, width } = props;
  const pad = 5;
  const border = 4
  const size = width/5 - 2*pad
  const colorsc = []
  colorsc.push(
    <View key = {0} style = {{padding: pad}}>
      <Color color = {COLOR_NONE} width = {size - 2*border}
        style = {{height: size, width : size, borderWidth: border, borderRadius:size/2}}
        {...{ selectedColor, setSelectedColor }}/>
    </View>);
  for (let index in colorsCircles) {
    colorsc.push(
      <View key = {Number(index)+1} style = {{padding: 5}}>
        <Color color={colorsCircles[index]}
          style = {{height: size, width : size, borderWidth: border, borderRadius:size/2}}
          {...{ selectedColor, setSelectedColor }}/>
      </View>);
  }
  return (
    <View style = {styles.toolFooter}>
      <View style={[styles.row, {flexWrap: 'wrap'}, styles.center]}>
        {colorsc}
      </View>
    </View>
  )
}

export default ColorFooter;