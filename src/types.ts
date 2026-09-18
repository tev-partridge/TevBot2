export enum Move {
  Rock = "R",
  Paper = "P",
  Scissors = "S",
  Dynamite = "D",
  WaterBomb = "W",
}

export interface Round {
  p1: Move;
  p2: Move;
}

export interface GameState {
  rounds: Round[];
}
