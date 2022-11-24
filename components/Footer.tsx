import React from 'react';
import { View } from 'react-native';
import styles from './style';
import NumbersFooter from '../components/NumbersFooter';
import ColorFooter from '../components/ColorFooter';
import ToolsFooter from '../components/ToolsFooter';
import { TOOLS } from './constants';
import { useAppSelector } from '../app/hooks';

interface Props {
  onLayout?:any;
}

const Footer = (props: Props) => {
  const selectedTool = useAppSelector((state) => state.tool.value)

  const above = (selectedTool === TOOLS.BUCKET) ? 
    <ColorFooter /> : 
    (selectedTool === TOOLS.PEN || selectedTool === TOOLS.PENCIL) ? 
      <NumbersFooter /> : 
      <View></View> ;

  return (
    <View style = {styles.footer} onLayout = {props.onLayout}>
      {above}
      <ToolsFooter />
    </View>
  )
}

export default Footer;