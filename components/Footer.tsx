import React from 'react';
import { View } from 'react-native';
import styles from './style';
import NumbersFooter from '../components/NumbersFooter';
import ColorFooter from '../components/ColorFooter';
import ToolsFooter from '../components/ToolsFooter';
import { TOOLS } from './constants';
import { useAppSelector } from '../app/hooks';

interface Props {
  width: number,
  onLayout?:any;
}

const Footer = (props: Props) => {
  const selectedTool = useAppSelector((state) => state.tool.value)
  const { width } = props;

  const above = (selectedTool === TOOLS.BUCKET) ? 
    <ColorFooter width={width} /> : 
    (selectedTool === TOOLS.PEN || selectedTool === TOOLS.PENCIL) ? 
      <NumbersFooter width = {width} /> : 
      <View></View> ;

  return (
    <View style = {styles.footer} onLayout = {props.onLayout}>
      {above}
      <ToolsFooter />
    </View>
  )
}

export default Footer;