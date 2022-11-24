import { NativeModules } from 'react-native';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../app/hooks';
import puzzles from '../navigation/puzzlesList';

interface SolverModule {
  getSolutions: (puzzle_str: string) => Promise<string>
}

const SolverModule: SolverModule = NativeModules.CryptatorModule;

const buildPuzzle = (puzzleId: number) => {
  return puzzles[puzzleId].equation.join("");
}

export const getSolutions = async (puzzleId: number) => {
  // TODO : treat exceptions !
  return await SolverModule.getSolutions(buildPuzzle(puzzleId));
};