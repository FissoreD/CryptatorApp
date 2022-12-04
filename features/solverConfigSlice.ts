import { createSlice, Slice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import { setEngine } from '../backend/nativeModules';

interface CryptatorConfigState {
  solutionLimit?: number;
  timeLimit?: number;
  useBigNum?: boolean;
  dryRun?: boolean;
  countryCode?: string;
  langCode?: string;
  nthreads?: number;
  minLeftOperands?: number;
  maxLeftOperands?: number;
  lightModel?: boolean;
  lightPropagation?: boolean;
  arithmeticBase?: number;
  allowLeadingZeros?: boolean;
  hornerScheme?: boolean;
  relaxMaxDigitOccurrence?: number;
  relaxMinDigitOccurrence?: number;
  checkSolution?: boolean;
  graphviz?: boolean;
  verbose?: boolean,
}

interface CryptatorState {
  config: Required<CryptatorConfigState>,
  solution: string,
  cryptarithmIndex: number
}

const initialConfig: Required<CryptatorConfigState> = {
  solutionLimit: 0,
  timeLimit: 0,
  useBigNum: false,
  dryRun: false,
  countryCode: "EN",
  langCode: "en",
  nthreads: 1,
  minLeftOperands: 2,
  maxLeftOperands: -1,
  lightModel: true,
  lightPropagation: false,
  arithmeticBase: 10,
  allowLeadingZeros: false,
  hornerScheme: false,
  relaxMaxDigitOccurrence: 0,
  relaxMinDigitOccurrence: 0,
  checkSolution: false,
  graphviz: false,
  verbose: false,
}

// Define the initial state using that type
const initialState: Required<CryptatorState> = {
  config: { ...initialConfig },
  solution: "",
  cryptarithmIndex: 0
}

export const cryptatorConfigSlice: Slice<CryptatorState> = createSlice({
  name: 'cryptatorConfig',

  initialState: { ...initialState },
  reducers: {
    setConfig: (state, action: PayloadAction<CryptatorConfigState>) => {
      for (let k in state) {
        // @ts-ignore
        state[k] = action.payload[k] || state[k];
      }
    },
    resetConfig: (state) => {
      for (let k in state) {
        // @ts-ignore
        state[k] = initialState[k];
      }
    },
    setCryptarithm: (state, action: PayloadAction<number>) => {
      state.cryptarithmIndex = action.payload;
      setEngine(action.payload);
    }
  },
})

export const { setConfig, resetConfig, solve, setCryptarithm } = cryptatorConfigSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTool = (state: RootState) => state.tool.value

export default cryptatorConfigSlice.reducer

