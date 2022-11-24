import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

// Define a type for the slice state
interface LetterState {
  value: string,
  name: string,
  letters: string[],
  lettersColor: string[]
}

// Define the initial state using that type
const initialState: LetterState = {
  value: "",
  name: "",
  letters: [],
  lettersColor: []
}

export const letterSlice = createSlice({
  name: 'letter',

  initialState,
  reducers: {
    changeLetter: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setLetterColor: (state, action: PayloadAction<{number: number, value: string}>) => {
      state.lettersColor[action.payload.number] = action.payload.value
    },
    setLetters: (state, action: PayloadAction<string[]>) => {
      state.letters = action.payload
    },
  },
})

export const { changeLetter, setLetterColor, setLetters, setName } = letterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectLetter = (state: RootState) => state.letter.value
export const lettersColor = (state: RootState) => state.letter.lettersColor
export const letterColor = (state: RootState, index:number) => state.letter.lettersColor[index]

export default letterSlice.reducer
