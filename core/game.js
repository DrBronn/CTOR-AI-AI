/* ============================================================
   CTOR-MINIMAL v3 — GAME ENGINE (Fixed Turn Logic)
   ============================================================ */

class CTORGame {
  constructor() {
    this.N = 10;
    this.reset();
  }

  reset() {
    this.board = this.makeEmptyBoard();
    this.current = 'R';
    this.turn = 1;
    this.finished = false;
    this.winner = null;

    this.opUsed = { put: 0, move: 0 };
  }

  makeEmptyBoard() {
    const b = [];
    for (let i = 0; i < this.N; i++) {
      b[i] = [];
      for (let j = 0; j < this.N; j++) b[i][j] = '.';
    }
    return b;
  }

  cloneBoard() {
    return this.board.map(row => row.slice());
  }

  /* ============================================================
     LEGAL MOVES
     ============================================================ */

  getLegalMoves(player) {
    if (this.finished) return [];

    const moves = [];

    // PUT
    if (this.opUsed.put < 2) {
      for (let i = 0; i < this.N; i++)
        for (let j = 0; j < this.N; j++)
          if (this.board[i][j] === '.')
            moves.push({ type: "put", i, j });
    }

    // MOVE
    if (this.opUsed.move < 2) {
      for (let i = 0; i < this.N; i++) {
        for (let j = 0; j < this.N; j++) {
          if (this.board[i][j] === player) {
            const neigh = this.getOrthNeighbors(i, j);
            for (const [ni, nj] of neigh) {
              if (this.board[ni][nj] === '.') {
                moves.push({
                  type: "move",
                  from: [i, j],
                  to: [ni, nj]
                });
              }
            }
          }
        }
      }
    }

    return moves;
  }

  /* ============================================================
     APPLY MOVE
     ============================================================ */

  applyMove(move) {
    if (this.finished) return;

    if (move.type === "put") {
      this.board[move.i][move.j] = this.current;
      this.opUsed.put++;
    }

    else if (move.type === "move") {
      const [i1, j1] = move.from;
      const [i2, j2] = move.to;
      this.board[i1][j1] = '.';
      this.board[i2][j2] = this.current;
      this.opUsed.move++;
    }

    // autoEat after each operation
    this.autoEat();

    // FIXED: end turn after 2 total operations
    if (this.opUsed.put + this.opUsed.move >= 2) {
      this.endTurn();
    }
  }

  /* ============================================================
     END TURN
     ============================================================ */

  endTurn() {
    this.opUsed = { put: 0, move: 0 };
    this.current = (this.current === 'R') ? 'B' : 'R';
    this.turn++;

    this.checkWinner();
  }

  /* ============================================================
     AUTO-EAT
     ============================================================ */

  autoEat() {
    let changed = true;

    while (changed) {
      changed = false;

      const ext = this.buildExtendedBoard();

      for (let i = 0; i < this.N; i++) {
        for (let j = 0; j < this.N; j++) {

          const cell = this.board[i][j];

          if (cell !== '.' && cell !== this.current) {
            const cnt = this.countNeighbors(i, j, this.current, ext);

            if (cnt >= 5) {
              this.board[i][j] = this.current;
              changed = true;
            }
          }
        }
      }
    }
  }

  /* ============================================================
     EXTENDED BOARD FOR TOROID
     ============================================================ */

  buildExtendedBoard() {
    const N = this.N;
    const VS = N + 2;
    const ext = Array.from({ length: VS }, () => Array(VS).fill('.'));

    // center
    for (let i = 0; i < N; i++)
      for (let j = 0; j < N; j++)
        ext[i+1][j+1] = this.board[i][j];

    // top/bottom
    for (let j = 1; j <= N; j++) {
      ext[0][j]   = this.board[N-1][j-1];
      ext[N+1][j] = this.board[0][j-1];
    }

    // left/right
    for (let i = 1; i <= N; i++) {
      ext[i][0]   = this.board[i-1][N-1];
      ext[i][N+1] = this.board[i-1][0];
    }

    // corners
    ext[0][0]       = this.board[N-1][N-1];
    ext[0][N+1]     = this.board[N-1][0];
    ext[N+1][0]     = this.board[0][N-1];
    ext[N+1][N+1]   = this.board[0][0];

    return ext;
  }

  countNeighbors(i, j, player, ext) {
    const ei = i + 1;
    const ej = j + 1;
    let count = 0;

    for (let di = -1; di <= 1; di++) {
      for (let dj = -1; dj <= 1; dj++) {
        if (di === 0 && dj === 0) continue;
        if (ext[ei + di][ej + dj] === player) count++;
      }
    }
    return count;
  }

  /* ============================================================
     ORTHOGONAL NEIGHBORS (TOROID)
     ============================================================ */

  getOrthNeighbors(i, j) {
    const N = this.N;
    return [
      [(i - 1 + N) % N, j],
      [(i + 1) % N, j],
      [i, (j - 1 + N) % N],
      [i, (j + 1) % N]
    ];
  }

  /* ============================================================
     CHECK WINNER
     ============================================================ */

  checkWinner() {
    const movesR = this.getLegalMoves('R');
    const movesB = this.getLegalMoves('B');

    if (movesR.length === 0 && movesB.length === 0) {
      this.finished = true;
      const [r, b] = this.getScore();
      this.winner = (r > b) ? 'R' : (b > r) ? 'B' : 'draw';
    }
  }

  /* ============================================================
     SCORE
     ============================================================ */

  getScore() {
    let r = 0, b = 0;
    for (let i = 0; i < this.N; i++)
      for (let j = 0; j < this.N; j++) {
        if (this.board[i][j] === 'R') r++;
        else if (this.board[i][j] === 'B') b++;
      }
    return [r, b];
  }
}

export { CTORGame };

