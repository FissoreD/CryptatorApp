import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

export type letterColorType = {
  number: number, 
  value: string
}

// Define a type for the slice state
interface LetterState {
  value: string,
  lettersColor: string[]
}

// Define the initial state using that type
const initialState: LetterState = {
  value: "",
  lettersColor: []
}

export const letterSlice = createSlice({
  name: 'letter',

  initialState,
  reducers: {
    changeLetter: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
    setLetterColor: (state, action: PayloadAction<letterColorType>) => {
      state.lettersColor[action.payload.number] = action.payload.value
    },
  },
})

export const { changeLetter, setLetterColor } = letterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectLetter = (state: RootState) => state.letter.value
export const lettersColor = (state: RootState) => state.letter.lettersColor
export const letterColor = (state: RootState, index:number) => state.letter.lettersColor[index]

export default letterSlice.reducer
