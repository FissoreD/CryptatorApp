import React from 'react';
import { View } from 'react-native';
import styles from './style';
import { ClickableIcon } from './Bouton';
import { TOOLS } from './constants';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { changeTool } from '../features/toolSlice'
import { clearSelected } from '../features/numberSlice'

const ToolsFooter = () => {
  const selectedTool = useAppSelector((state) => state.tool.value)
  const dispatch = useAppDispatch()
  const setSelectedTool = (tool:string) => dispatch(changeTool(tool))

  const onPress = (tool:string) => {
    if (selectedTool !== tool) {
      dispatch(clearSelected()); 
    }
  }

  return (
    <View style={styles.footer}>
      <View style={[styles.row, styles.full]}>
        <ClickableIcon name = {TOOLS.PENCIL} print='draft' flexBasis='34%' onPress={onPress}
          selectedItem = {selectedTool} setSelectedItem = {setSelectedTool} />
        <ClickableIcon name = {TOOLS.PEN} print='final' flexBasis='34%' onPress={onPress}
          selectedItem = {selectedTool} setSelectedItem = {setSelectedTool} />
        <ClickableIcon name = {TOOLS.BUCKET} print='color' flexBasis='34%' onPress={onPress}
          selectedItem = {selectedTool} setSelectedItem = {setSelectedTool} />
      </View>
    </View>
  )
}

export default ToolsFooter;