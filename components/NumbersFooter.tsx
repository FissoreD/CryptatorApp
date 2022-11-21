import React from 'react';
import { View } from 'react-native';
import styles from './style';
import Number from './Numbers';

interface Props {
  width: number,
  onPressNumber: any,
  doneNumbers: string[],
  setDoneNumbers: React.Dispatch<React.SetStateAction<string[]>>,
  selectedNumbers: string[],
  setSelectedNumbers: React.Dispatch<React.SetStateAction<string[]>>,
}

const NumbersFooter = (props: Props) => {
  const { selectedNumbers, setSelectedNumbers, width } = props;
  const { doneNumbers, setDoneNumbers, onPressNumber } = props;
  const pad = 5;
  const size = width/5 - 2*pad;
  const numbers = []
  for (let i=1; i <= 10; i++) {
    const val = i%10;
    numbers.push(
      <View key = {i} style = {{padding: pad}}>
        <Number name = {String(val)} style = {{height: size, width : size, borderRadius:size/2}}
          {...{ onPressNumber, doneNumbers, setDoneNumbers, selectedNumbers, setSelectedNumbers }}/>
      </View>);
  }
  return (
    <View style = {styles.toolFooter}>
      <View style={[styles.row, {flexWrap: 'wrap'}, styles.center]}>
        {numbers}
      </View>
    </View>
  )
}

export default NumbersFooter;