import React from 'react';
import { View } from 'react-native';
import styles from './style';
import { ClickableIcon } from './Bouton';
import { TOOLS } from './constants';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { changeTool } from '../features/toolSlice'

interface ToolsProps {
  onPressTool: any,
}

const ToolsFooter = (props: ToolsProps) => {
  const { onPressTool } = props;
  const selectedTool = useAppSelector((state) => state.tool.value)
  const dispatch = useAppDispatch()
  const setSelectedTool = (tool:string) => dispatch(changeTool(tool))
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