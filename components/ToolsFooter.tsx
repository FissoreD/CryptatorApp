import React from 'react';
import { View } from 'react-native';
import styles from './style';
import { ClickableIcon } from './Bouton';
import { TOOLS } from './constants';

interface ToolsProps {
  onPressTool: any,
  selectedTool: string,
  setSelectedTool: React.Dispatch<React.SetStateAction<string>>
}

const ToolsFooter = (props: ToolsProps) => {
  const { selectedTool, setSelectedTool, onPressTool } = props;
  return (
    <View style={styles.footer}>
      <View style={[styles.row, styles.full]}>
        <ClickableIcon name = {TOOLS.PENCIL} print='draft' flexBasis='34%' onPress={onPressTool}
          selectedItem = {selectedTool} setSelectedItem = {setSelectedTool} />
        <ClickableIcon name = {TOOLS.PEN} print='final' flexBasis='34%' onPress={onPressTool}
          selectedItem = {selectedTool} setSelectedItem = {setSelectedTool} />
        <ClickableIcon name = {TOOLS.BUCKET} print='color' flexBasis='34%' onPress={onPressTool}
          selectedItem = {selectedTool} setSelectedItem = {setSelectedTool} />
      </View>
    </View>
  )
}

export default ToolsFooter;