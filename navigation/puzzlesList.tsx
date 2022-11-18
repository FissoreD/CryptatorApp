

interface Puzzle {
  id: string,
  name: string;
  fav: boolean;
  done: boolean;
}

const puzzles:Puzzle[] = [
  {id: '1', name: 'SEND+MORE', fav: true, done: false},
  {id: '2', name: 'a+b=c', fav: false, done: true},
  {id: '3', name: 'coucou-toi', fav: false, done: false},
  {id: '4', name: '...', fav: true, done: true},
  {id: '5', name: '...', fav: false, done: false},
  {id: '6', name: '...', fav: false, done: false},
  {id: '7', name: '...', fav: false, done: false},
  {id: '8', name: '...', fav: false, done: false},
  {id: '9', name: '...', fav: false, done: false},
  {id: '10', name: '...', fav: false, done: false},
  {id: '11', name: '...', fav: false, done: false},
  {id: '12', name: '...', fav: false, done: false},
  {id: '13', name: '...', fav: false, done: false},
  {id: '14', name: '...', fav: false, done: false},
  {id: '15', name: '...', fav: false, done: false},
]

export default puzzles;