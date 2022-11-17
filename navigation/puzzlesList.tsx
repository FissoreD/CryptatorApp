

interface Puzzle {
  id: string,
  name: string;
  fav: boolean;
  done: boolean;
}

const puzzles:Puzzle[] = [
  {id: '1', name: 'SEND+MORE', fav: true, done: false},
  {id: '2', name: 'a+b=c', fav: false, done: true},
  {id: '3', name: 'coucou-toi', fav: false, done: false}
]

export default puzzles;