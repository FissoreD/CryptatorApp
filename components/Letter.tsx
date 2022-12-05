import React from 'react';
import { Pressable, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { changeLetter, setLetterColor } from '../features/letterSlice';
import { clearSelected } from '../features/numberSlice';
import colors from './colors';
import { COLOR_NONE, TOOLS } from './constants';
import styles from './style';

interface LetterProps {
  name: string,
  print?: string,
  letters: string[],
  style?: StyleProp<ViewStyle>
}

export const Letter = (props: { name: string, style?: any }) => {
  const dispatch = useAppDispatch()

  const style = [styles.letter, styles.center];
  style?.push(props.style)

  const onPlay = async () => {
    dispatch(changeLetter(""));
  };

  return (
    <Pressable style={[styles.center, { borderWidth: 2, borderColor: colors.none }]} onPress={onPlay}>
      <Text style={[style, { textAlign: "center", textAlignVertical: "center", color: colors.lightgray }]}>{props.name}</Text>
    </Pressable>
  );
};
const styles1 = StyleSheet.create({
  absolute: {
    position: 'absolute',
  },
})

const PressableLetter = (props: LetterProps) => {
  const selectedLetter = useAppSelector((state) => state.letter.selectedLetter)
  const lettersColor = useAppSelector((state) => state.letter.lettersColor)
  const selectedTool = useAppSelector((state) => state.tool.value)
  const selectedColor = useAppSelector((state) => state.color.value)
  const affectation = useAppSelector((state) => state.letter.affectation)[props.name] || ""
  const invalidAffectation = useAppSelector((state) => state.letter.invalidNumbers)
  const annotations = useAppSelector((state) => state.letter.annotations)[props.name] || []
  const valueColor = invalidAffectation.includes(affectation) ? colors.red : colors.black
  const arithmeticBase = useAppSelector((state) => state.solver.config.arithmeticBase)
  const dispatch = useAppDispatch()


  const style: StyleProp<ViewStyle>[] = [styles.letter];
  if (props.style) {
    style.push(props.style)
  }

  const activeBorder = (selectedLetter === props.name) ? colors.black : colors.none;
  const pos = props.letters.indexOf(props.name)
  const activeColor = (pos >= 0 && lettersColor[pos] !== COLOR_NONE) ? lettersColor[pos] : colors.lightgray;

  const onPlay = async () => {
    if (selectedLetter === props.name) {
      dispatch(changeLetter(""));
      dispatch(clearSelected());
    } else {
      dispatch(changeLetter(props.name));
      if (selectedTool === TOOLS.BUCKET) {
        dispatch(clearSelected());
        dispatch(setLetterColor({ number: pos, value: selectedColor }));
      }
    }
  };

  type keys = "toChoose" | "pen" | "pencil"

  type t = StyleProp<TextStyle>[];
  type v = StyleProp<ViewStyle>[];
  const letterStyles: Map<keys, { position: v, letter: t, pen: t }> = new Map([
    ["pen", {
      position: [{ paddingLeft: 3 }],
      letter: [{ color: colors.black }],
      pen: [style, { textAlign: "center", textAlignVertical: "center", color: valueColor }],
    }],
    ["toChoose", {
      position: [{ alignItems: "center" }, styles.full],
      letter: [style, { textAlign: "center", textAlignVertical: "center", color: activeColor }],
      pen: [style, { textAlign: "center", textAlignVertical: "center", color: valueColor }],
    }]
  ])

  const buildGrid = () => {
    const sqrt = Math.ceil(Math.sqrt(arithmeticBase));
    const size = (styles.letterSize.width) / sqrt - 1;

    const numbers = []
    for (const annotation of annotations) {
      numbers.push(
        <Text key={annotation} style={{ width: size, height: size, textAlign: "center", fontSize: size - 1, color: colors.black, lineHeight: size }}>{annotation}</Text>
      );
    }
    return numbers
  }

  const letterStyle = letterStyles.get(affectation ? "pen" : "toChoose")!;

  return (
    <Pressable style={[{ borderWidth: 2, borderColor: activeBorder, borderRadius: 10 }, styles.letterSize, styles.center]} onPress={onPlay}>
      {/* The letter */}
      <View style={[{ position: "absolute" }, styles.full, letterStyle.position]}>
        <Text style={letterStyle.letter}>{props.name}</Text>
      </View>
      {/* The chosen number */}
      <View style={[{ position: "absolute", alignItems: "center" }]} >
        <Text style={letterStyle.pen}>
          {affectation}</Text>
      </View>
      {/* The pencil hints */}
      <View style={[styles.row, { position: "absolute", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }]}>{buildGrid()}</View>
    </Pressable>
  );
};

export default PressableLetter;

