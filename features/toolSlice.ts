import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import { TOOLS } from '../components/constants'

// Define a type for the slice state
interface ToolState {
  value: string
}

// Define the initial state using that type
const initialState: ToolState = {
  value: "",
}

export const toolSlice = createSlice({
  name: 'tool',

  initialState,
  reducers: {
    pen: (state) => {
      state.value = TOOLS.PEN
    },
    pencil: (state) => {
      state.value = TOOLS.PENCIL
    },
    bucket: (state) => {
      state.value = TOOLS.BUCKET
    },
    changeTool: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { pen, pencil, bucket, changeTool } = toolSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTool = (state: RootState) => state.tool.value

export default toolSlice.reducer
