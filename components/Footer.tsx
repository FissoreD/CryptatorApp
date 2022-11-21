import React from 'react';
import { View } from 'react-native';
import styles from './style';
import NumbersFooter from '../components/NumbersFooter';
import ColorFooter from '../components/ColorFooter';
import ToolsFooter from '../components/ToolsFooter';
import { TOOLS } from './constants';

interface Props {
  width: number,
  doneNumbers: string[],
  setDoneNumbers: React.Dispatch<React.SetStateAction<string[]>>,
  selectedNumbers: string[],
  setSelectedNumbers: React.Dispatch<React.SetStateAction<string[]>>,
  selectedColor: string,
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>,
  selectedTool: string,
  setSelectedTool: React.Dispatch<React.SetStateAction<string>>,
  onPressNumber: any,
  onPressTool: any,
  onLayout?:any;
}

const Footer = (props: Props) => {
  const { selectedTool, setSelectedTool } = props;
  const { selectedColor, setSelectedColor } = props;
  const { width, doneNumbers, setDoneNumbers, selectedNumbers, setSelectedNumbers } = props;
  const { onPressNumber, onPressTool } = props;

  const above = (selectedTool === TOOLS.BUCKET) ? 
    <ColorFooter width={width} {...{ selectedColor, setSelectedColor }} /> : 
    (selectedTool === TOOLS.PEN || selectedTool === TOOLS.PENCIL) ? 
      <NumbersFooter width = {width} {...{ onPressNumber, doneNumbers, setDoneNumbers, selectedNumbers, setSelectedNumbers }} /> : 
      <View></View> ;

  return (
    <View style = {styles.footer} onLayout = {props.onLayout}>
      {above}
      <ToolsFooter {...{ onPressTool, selectedTool, setSelectedTool }}/>
    </View>
  )
}

export default Footer;