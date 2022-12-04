import React from 'react';
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { isSolved, takeDecision } from '../backend/nativeModules';
import { addAnnotation, addInvalidAffectation, clearAffectation, makeAffectation, removeAnnotation } from '../features/letterSlice';
import { clearSelected, setSelected } from '../features/numberSlice';
import solvedMessage from './buttonListener/SolvedPopUp';
import colors from './colors';
import { TOOLS } from './constants';
import styles from './style';

interface NumberProps {
  name: string,
  style?: StyleProp<ViewStyle>
}

const buttonStyle = {
  "Active": { bg: colors.black, border: colors.lightgray, txt: colors.lightgray },
  "Blocked": { bg: colors.none, border: colors.black, txt: colors.lightgray },
}

const Number = (props: NumberProps) => {
  const usedNumbers = useAppSelector((state) => state.letter.usedNumbers)
  const selectedTool = useAppSelector((state) => state.tool.value)
  const doneNumbers = useAppSelector((state) => state.number.done)
  const selectedLetter = useAppSelector((state) => state.letter.selectedLetter)
  const annotations = useAppSelector((state) => state.letter.annotations)[selectedLetter] || []
  const invalidAffectation = useAppSelector((state) => state.letter.invalidNumbers)
  const affectation = useAppSelector((state) => state.letter.affectationsLetter)[selectedLetter] || ""

  const dispatch = useAppDispatch()

  const activeColor = doneNumbers.includes(props.name) ? colors.lightgray : usedNumbers.includes(props.name) ? colors.color : colors.black;
  const activeBackgroundColor = usedNumbers.includes(props.name) ? colors.black : invalidAffectation.includes(props.name) ? colors.red : colors.none;
  const activeBorderColor = doneNumbers.includes(props.name) ? colors.lightgray : colors.black;

  const style: StyleProp<ViewStyle>[] = [styles.circle, styles.center, { borderColor: activeBorderColor, backgroundColor: activeBackgroundColor }];
  if (props.style) {
    style.push(props.style)
  }

  const onPlay = async () => {
    if (selectedTool === TOOLS.BUCKET) {
      // No more selected numbers
      dispatch(clearSelected());
    } else if (selectedLetter === "" || ((usedNumbers.includes(props.name) || invalidAffectation.includes(props.name)) && affectation !== props.name)) return
    else if (selectedTool === TOOLS.PEN) {
      // selection of only one number
      if (usedNumbers.includes(props.name) || invalidAffectation.includes(props.name)) {
        // if number already in the selectedNumbers removes it
        dispatch(clearSelected());
        dispatch(clearAffectation());
      } else {
        // if number not already in the selectedNumbers adds it
        dispatch(setSelected(props.name));
        dispatch(makeAffectation(props.name));
        let res = await takeDecision(selectedLetter, props.name);
        if (!res) dispatch(addInvalidAffectation());
        else if (await isSolved()) {
          solvedMessage()
        }
      }
    } else if (selectedTool === TOOLS.PENCIL) {
      if (affectation) return
      // selection of many numbers
      if (annotations.includes(props.name)) {
        // if number already in the annotations removes it
        // dispatch(removeSelected(props.name));
        dispatch(removeAnnotation(props.name))
      } else {
        // if number not already in the selectedNumbers adds it
        // dispatch(addSelected(props.name));
        dispatch(addAnnotation(props.name))
      }
    }
  };

  return (
    <Pressable style={style} onPress={onPlay}>
      <Text style={[styles.text, { color: activeColor }]}>{props.name}</Text>
    </Pressable>
  );
};

export default Number;

