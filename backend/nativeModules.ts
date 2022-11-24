import { NativeModules } from 'react-native';

interface SolverModule {
  getSolutions: (p: (s: string) => string) => string
}

const SolverModule: SolverModule = NativeModules.CryptatorModule;

export const getSolutions = () => SolverModule.getSolutions((s: string) => { console.log(s); return s })