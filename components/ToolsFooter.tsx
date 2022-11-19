import React from 'react';
import { View } from 'react-native';
import styles from './style';
import { ClickableIcon } from './Bouton';

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
        <ClickableIcon name='pencil' print='draft' flexBasis='34%' onPress={onPressTool}
          selectedItem = {selectedTool} setSelectedItem = {setSelectedTool} />
        <ClickableIcon name='pen' print='final' flexBasis='34%' onPress={onPressTool}
          selectedItem = {selectedTool} setSelectedItem = {setSelectedTool} />
        <ClickableIcon name='bucket' print='color' flexBasis='34%' onPress={onPressTool}
          selectedItem = {selectedTool} setSelectedItem = {setSelectedTool} />
      </View>
    </View>
  )
}

export default ToolsFooter;