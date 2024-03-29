import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

// Define a type for the slice state
interface LetterState {
  selectedLetter: string,
  name: string,
  letters: string[],
  lettersColor: string[],
  affectation: { [letter: string]: string }
  usedNumbers: string[],
  invalidNumbers: string[],
  annotations: { [letter: string]: string[] }
}

// Define the initial state using that type
const initialState: LetterState = {
  selectedLetter: "",
  name: "",
  letters: [],
  lettersColor: [],
  affectation: {},
  usedNumbers: [],
  invalidNumbers: [],
  annotations: {}
}

export const letterSlice = createSlice({
  name: 'letter',

  initialState,
  reducers: {
    changeLetter: (state, action: PayloadAction<string>) => {
      state.selectedLetter = action.payload
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setLetterColor: (state, action: PayloadAction<{ number: number, value: string }>) => {
      state.lettersColor[action.payload.number] = action.payload.value
    },
    setLetters: (state, action: PayloadAction<string[]>) => {
      state.letters = action.payload
    },
    makeAffectation: (state, affectation: PayloadAction<string>) => {
      const letter = state.selectedLetter;
      state.usedNumbers = state.usedNumbers.filter(e => e !== state.affectation[letter]);
      state.invalidNumbers = state.invalidNumbers.filter(e => e !== state.affectation[letter]);
      state.affectation[letter] = affectation.payload;
      state.usedNumbers.push(affectation.payload);
      state.annotations[letter] = [];
      for (const annotation in state.annotations) {
        state.annotations[annotation] = state.annotations[annotation].filter(e => e != affectation.payload)
      }
    },
    clearAffectation: (state) => {
      state.usedNumbers = state.usedNumbers.filter(e => e !== state.affectation[state.selectedLetter]);
      state.invalidNumbers = state.invalidNumbers.filter(e => e !== state.affectation[state.selectedLetter]);
      state.affectation[state.selectedLetter] = "";
    },
    addInvalidAffectation: (state) => {
      state.usedNumbers = state.usedNumbers.filter(e => e !== state.affectation[state.selectedLetter]);
      state.invalidNumbers.push(state.affectation[state.selectedLetter])
    },
    addAnnotation: (state, annotation: PayloadAction<string>) => {
      const annotations = state.annotations[state.selectedLetter] || []
      if (annotations.length === 0) { state.annotations[state.selectedLetter] = annotations }
      annotations.push(annotation.payload)
      annotations.sort()
    },
    removeAnnotation: (state, annotation: PayloadAction<string>) => {
      state.annotations[state.selectedLetter] = state.annotations[state.selectedLetter].filter(e => e !== annotation.payload)
    },
    clearAnnotation: (state) => {
      state.annotations[state.selectedLetter] = []
    },
  },
})

export const {
  changeLetter, setLetterColor, setLetters, setName,
  makeAffectation, clearAffectation, addInvalidAffectation,
  removeAnnotation, addAnnotation, clearAnnotation } = letterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectLetter = (state: RootState) => state.letter.selectedLetter
export const lettersColor = (state: RootState) => state.letter.lettersColor
export const letterColor = (state: RootState, index: number) => state.letter.lettersColor[index]

export default letterSlice.reducer