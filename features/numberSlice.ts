import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

type condition = "selected" | "done" | "invalid"

// Define a type for the slice state
interface NumberState {
  selected: string[]
  done: string[],
}

// Define the initial state using that type
const initialState: NumberState = {
  selected: [],
  done: []
}

export const numberSlice = createSlice({
  name: 'number',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    clearSelected: (state) => {
      state.selected = []
    },
    setSelected: (state, action: PayloadAction<string>) => {
      state.selected = [action.payload]
    },
    setSelectedArray: (state, action: PayloadAction<string[]>) => {
      state.selected = action.payload
    },
    addSelected: (state, action: PayloadAction<string>) => {
      state.selected.push(action.payload)
    },
    removeSelected: (state, action: PayloadAction<string>) => {
      state.selected = (state.selected.filter(e => e !== action.payload));
    },
    clearDone: (state) => {
      state.done = []
    },
    setDone: (state, action: PayloadAction<string>) => {
      state.done = [action.payload]
    },
    setDoneArray: (state, action: PayloadAction<string[]>) => {
      state.done = action.payload
    },
    addDone: (state, action: PayloadAction<string>) => {
      state.done.push(action.payload)
    },
    removeDone: (state, action: PayloadAction<string>) => {
      state.done = (state.done.filter(e => e !== action.payload));
    },
  },
})

export const { clearSelected, setSelected, setSelectedArray, addSelected, removeSelected,
  clearDone, setDone, setDoneArray, addDone, removeDone, } = numberSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectedNumber = (state: RootState) => state.number.selected
export const doneNumber = (state: RootState) => state.number.done

export default numberSlice.reducer
