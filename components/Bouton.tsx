import React from 'react';
import { Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import colors from './colors';
import Icons from '../font/Cryptator-fontello';

interface IconProps {
  name: string,
  print: string,
  flexBasis: string,
  onPress?: any,
  selectedItem: any,
  setSelectedItem: React.Dispatch<React.SetStateAction<any>>,
}

const ClickableIcon = (props: IconProps) => {
  const { selectedItem, setSelectedItem } = props;
  const style = StyleSheet.create({
    item:{
      display: 'flex',
      flexBasis: props.flexBasis,
      height: '100%',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      borderRightWidth: 1,
    }
  });

  const activeColor = React.useMemo(
    () => (props.name === selectedItem ? colors.black : colors.color),
    [props.name, selectedItem]
  );

  const activeBackgroundColor = React.useMemo(
    () => (props.name === selectedItem ? colors.highlight : colors.backgroundColor),
    [props.name, selectedItem]
  );

  const onPlay = async () => {
    setSelectedItem(props.name);
    props.onPress(props.name);
    console.log(props.print)
  };

  return (
    <Pressable onPress={onPlay} style={[style.item, {backgroundColor: activeBackgroundColor}]}>
      <Icons name={props.name} size={80} style={{color: activeColor}} />
    </Pressable>
  );
};

const ClickableOnceIcon = (props: IconProps) => {
  const style = StyleSheet.create({
    item:{
      display: 'flex',
      flexBasis: props.flexBasis,
      height: '100%',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      borderRightWidth: 1,
    }
  });

  const onPlay = async () => {
    console.log(props.print)
  };

  return (
    <TouchableOpacity onPress={onPlay} style={style.item}>
      <Icons name={props.name} size={80} style={{color: colors.color}} />
    </TouchableOpacity>
  );
};

export {ClickableIcon, ClickableOnceIcon};
