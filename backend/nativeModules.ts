import { NativeModules } from 'react-native';
import puzzles from '../navigation/puzzlesList';

interface GameEngine {
  getSolutions: (puzzle_str: string) => Promise<string>,
  setEngine: (cryptarithm: string) => Promise<void>,
  takeDecision: (symbol: string, reOperator: string, value: number) => Promise<boolean>,
  isSolved: () => Promise<boolean>
}

const gameEngine: GameEngine = NativeModules.CryptatorGame;

const buildPuzzle = (puzzleId: number) => {
  return puzzles[puzzleId].equation.join("");
}

export const getSolutions = async (puzzleId: number) => {
  // TODO : treat exceptions !
  let puzzle = buildPuzzle(puzzleId);
  return await gameEngine.getSolutions(puzzle);
};

export const setEngine = (puzzleId: number) => {
  let puzzle = buildPuzzle(puzzleId);
  gameEngine.setEngine(puzzle);
}

export const isSolved = gameEngine.isSolved
export const takeDecision = async (symbol: string, value: string) => {
  return await (value !== "" && symbol !== "" && gameEngine.takeDecision(symbol, "=", parseInt(value)));
}
