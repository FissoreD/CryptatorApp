import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

// Define a type for the slice state
interface WindowState {
  height: number,
  width: number
}

// Define the initial state using that type
const initialState: WindowState = {
  height: 0,
  width: 0,
}

export const windowSlice = createSlice({
  name: 'window',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setDimensions: (state, action: PayloadAction<{height:number, width: number}>) => {
      state.height = action.payload.height
      state.width = action.payload.width
    },
  },
})

export const { setDimensions } = windowSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectHeight = (state: RootState) => state.window.height
export const selectWidth = (state: RootState) => state.window.width

export default windowSlice.reducer
