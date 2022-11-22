import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import { COLOR_NONE } from '../components/constants'

// Define a type for the slice state
interface ColorState {
  value: string
}

// Define the initial state using that type
const initialState: ColorState = {
  value: COLOR_NONE,
}

export const colorSlice = createSlice({
  name: 'color',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeColor: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { changeColor } = colorSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectColor = (state: RootState) => state.color.value

export default colorSlice.reducer
