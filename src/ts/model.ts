type PlayerScores = {
  current: number;
  total: number;
};

export const state: {
  activePlayer: 0 | 1;
  playerScores: PlayerScores[];
} = {
  activePlayer: 0,
  playerScores: [
    { current: 0, total: 0 },
    { current: 0, total: 0 },
  ],
};

export const setActivePlayer = (player: 0 | 1) => (state.activePlayer = player);

export const generateDice = function (): number {
  return Math.floor(Math.random() * 6) + 1;
};

export const updateCurrentScore = (player: 0 | 1, score: number) => {
  state.playerScores[player].current += score;
};

export const updateTotalScore = (player: 0 | 1) => {
  state.playerScores[player].total += state.playerScores[player].current;
};

export const resetCurrentScore = (player: 0 | 1) =>
  (state.playerScores[player].current = 0);

export const switchActivePlayer = () => {
  // state.activePlayer = Math.abs(state.activePlayer - 1);
  if (state.activePlayer === 0) {
    setActivePlayer(1);
  } else {
    setActivePlayer(0);
  }
};

export const resetState = () => {
  state.activePlayer = 0;
  state.playerScores.forEach(player => {
    player.current = 0;
    player.total = 0;
  });
};

//
// export const updateTotalScore = (player: 0 | 1) => {
//   if (player === 0) {
//     state.totalScore0 += state.currentScore0;
//   } else {
//     state.totalScore1 += state.currentScore1;
//   }
// };
