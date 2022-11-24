import { NativeModules } from 'react-native';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../app/hooks';
import puzzles from '../navigation/puzzlesList';

let a = new Promise((resolve, reject) => {
  /* appel à la fonction asynchrone */
});

interface SolverModule {
  getSolutions: any
}

const SolverModule: SolverModule = NativeModules.CryptatorModule;

const buildPuzzle = (puzzleId: number) => {
  return puzzles[puzzleId].equation.join("");
}

export const getSolutions = async (puzzleId: number) => {
  console.log(`Created a new event with id ciao`);
  try {
    const solutions = await SolverModule.getSolutions(buildPuzzle(puzzleId));
    return solutions;
  } catch (e) {
    console.error(e);
  }
};