import React from 'react';
import { View } from 'react-native';
import styles from './style';
import NumbersFooter from '../components/NumbersFooter';
import ColorFooter from '../components/ColorFooter';
import ToolsFooter from '../components/ToolsFooter';

interface Props {
  width: number,
  doneNumbers: string[],
  setDoneNumbers: React.Dispatch<React.SetStateAction<string[]>>,
  selectedNumbers: string[],
  setSelectedNumbers: React.Dispatch<React.SetStateAction<string[]>>,
  selectedColor: string,
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>,
  selectedTool: string,
  setSelectedTool: React.Dispatch<React.SetStateAction<string>>
}

const Footer = (props: Props) => {
  const { selectedTool, setSelectedTool } = props;
  const { selectedColor, setSelectedColor } = props;
  const { width, doneNumbers, setDoneNumbers, selectedNumbers, setSelectedNumbers } = props;

  const onPressNumber = async (number: string) => {
    if (selectedTool === "pen") {
      // selection of only one number
      setSelectedNumbers([number])
    } else if (selectedTool === "pencil") {
      // selection of many numbers
      setSelectedNumbers(e => [...e, number])
    } else if (selectedTool === "bucket") {
      // No more selected numbers
      setSelectedNumbers([""])
    }
    console.log(number)
  };

  const onPressTool = async (tool: string) => {
    if (selectedTool !== tool) {
      setSelectedNumbers([""])
    }
    console.log(tool)
  };

  const above = (selectedTool === "bucket") ? 
    <ColorFooter width={width} {...{ selectedColor, setSelectedColor }} /> : 
    <NumbersFooter width = {width} {...{ onPressNumber, doneNumbers, setDoneNumbers, selectedNumbers, setSelectedNumbers }} />;

  return (
    <View style = {styles.footer}>
      {above}
      <ToolsFooter {...{ onPressTool, selectedTool, setSelectedTool }}/>
    </View>
  )
}

export default Footer;