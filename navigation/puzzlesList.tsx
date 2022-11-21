import { OPERATORS, COMPARATORS } from '../components/constants';

interface PuzzleData {
  name: string;
  equation: string[];
}

interface Puzzle {
  name: string;
  equation: string[];
  max: number;
  letters: string[];
  fav: boolean;
  done: boolean;
}

const puzzlesList:PuzzleData[] = [
  {name: 'SEND+MORE', equation: ["SEND", "+", "MORE", "=", "MONEY"]},
  {name: 'a+b=c', equation: ["a", "+", "b", "=", "c"]},
  {name: 'coucou-toi', equation: ["coucou", "-", "toi", "=", "salut"]},
  {name: '...', equation: ["ABC", "+", "CDE", "=", "FGH"]},
  {name: '...', equation: ["ABC", "+", "CDE", "=", "FGH"]},
  {name: '...', equation: ["ABC", "+", "CDE", "=", "FGH"]},
  {name: '...', equation: ["ABC", "+", "CDE", "=", "FGH"]},
  {name: '...', equation: ["ABC", "+", "CDE", "=", "FGH"]},
  {name: '...', equation: ["ABC", "+", "CDE", "=", "FGH"]},
  {name: '...', equation: ["ABC", "+", "CDE", "=", "FGH"]},
  {name: '...', equation: ["ABC", "+", "CDE", "=", "FGH"]},
  {name: '...', equation: ["ABC", "+", "CDE", "=", "FGH"]},
  {name: '...', equation: ["ABC", "+", "CDE", "=", "FGH"]},
  {name: '...', equation: ["ABC", "+", "CDE", "=", "FGH"]},
  {name: '...', equation: ["ABC", "+", "CDE", "=", "FGH"]},
]

function createPuzzles () : Puzzle[] {
  const puzzles:Puzzle[] = []
  let toAdd = 0
  for (let i in puzzlesList) {
    const letters:string[] = []
    const name = puzzlesList[i].name
    const equation = puzzlesList[i].equation
    let max = 0
    for (let j = 0; j < equation.length; j++) {
      if (!Object.values<string>(OPERATORS).includes(equation[j])
        && !Object.values<string>(COMPARATORS).includes(equation[j])) {
        const word = equation[j]
        const size = word.length
        max = (max < size + toAdd) ? size + toAdd : max
        for (let k = 0; k < size; k++) {
          if (!letters.includes(word[k]))
            letters.push(word[k])
        }
      }
      if (Object.values<string>(OPERATORS).includes(equation[j])) {
        toAdd = 2
      } else {
        toAdd = 0
      }
    }
    puzzles.push({name, equation, max, letters, fav:false, done:false})
  }
  return puzzles
}

const puzzles = createPuzzles()

export default puzzles;