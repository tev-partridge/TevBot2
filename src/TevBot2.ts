import {GameState, Move, Round} from "./types";

class TevBot2 {
  private dynamiteLeft: number = 100;
  private standardMoves: Move[] = [Move.Rock, Move.Paper, Move.Scissors];

  public makeMove(gameState: GameState): Move {
    return this.chooseMove(gameState);
  }

  private chooseMove(gameState: GameState): Move {

    const pastRounds: Round[] = gameState.rounds;

    const gameLength: number = pastRounds.length;
    if (gameLength < 1) {
      return this.standardMoves[Math.floor(Math.random() * this.standardMoves.length)];
    }

    const prevRound: Round = pastRounds[gameLength - 1];
    const prevOpponentMove = prevRound.p2;

    if (prevOpponentMove === Move.Dynamite) {
      if (this.dynamiteLeft > 0) {
        this.dynamiteLeft--;
        return prevOpponentMove;
      }
      return this.standardMoves[Math.floor(Math.random() * this.standardMoves.length)];
    }

    return prevOpponentMove;
  }
}

export = new TevBot2();
