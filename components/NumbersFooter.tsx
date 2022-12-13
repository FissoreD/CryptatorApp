import React from 'react';
import { View } from 'react-native';
import styles from './style';
import Number from './Numbers';
import { useAppSelector } from '../app/hooks';

const NumbersFooter = () => {
  const width = useAppSelector((state) => state.window.width)
  const arithmeticBase = useAppSelector((state) => state.solver.config.arithmeticBase)
  const pad = 5;
  const size = width / 5 - 2 * pad;
  const numbers = []
  for (let i = 1; i <= arithmeticBase; i++) {
    const val = i % arithmeticBase;
    numbers.push(
      <View key={i} style={{ padding: pad }}>
        <Number name={String(val)} style={{ height: size, width: size, borderRadius: size / 2 }} />
      </View>);
  }
  return (
    <View style={styles.toolFooter}>
      <View style={[styles.row, { flexWrap: 'wrap' }, styles.center]}>
        {numbers}
      </View>
    </View>
  )
}

export default NumbersFooter;