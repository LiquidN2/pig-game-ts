'use strict';

import * as model from './model';
import PlayerView from './views/playerView';
import diceView from './views/diceView';
import newGameView from './views/newGameView';
import holdView from './views/holdView';

const btnNew = document.querySelector('.btn--new') as HTMLButtonElement;
const btnRoll = document.querySelector('.btn--roll') as HTMLButtonElement;
const btnHold = document.querySelector('.btn--hold') as HTMLButtonElement;

const playerViews = [new PlayerView(0), new PlayerView(1)];

const controlRollDice: () => void = () => {
  // Roll dice
  const diceNum = model.generateDice();

  // Display dice picture
  diceView.update(diceNum);

  // Switch player of roll a '1'
  if (diceNum === 1) {
    model.resetCurrentScore(model.state.activePlayer);
    playerViews[model.state.activePlayer].resetScore('current');
    playerViews[model.state.activePlayer].removeActive();
    model.switchActivePlayer();
    playerViews[model.state.activePlayer].setActive();
    return;
  }

  model.updateCurrentScore(model.state.activePlayer, diceNum);
  playerViews[model.state.activePlayer].updateScore(
    model.state.playerScores[model.state.activePlayer].current,
    'current'
  );
};

const controlNewGame: () => void = () => {
  model.resetState();
  playerViews.forEach(playerView => {
    playerView.removeActive();
    playerView.removeWinner();
    playerView.resetScore('current');
    playerView.resetScore('total');
  });
  playerViews[model.state.activePlayer].setActive();
  diceView.enableRoll();
  holdView.enableHold();
};

const controlHold: () => void = () => {
  model.updateTotalScore(model.state.activePlayer);
  playerViews[model.state.activePlayer].updateScore(
    model.state.playerScores[model.state.activePlayer].total,
    'total'
  );
  model.resetCurrentScore(model.state.activePlayer);
  playerViews[model.state.activePlayer].resetScore('current');
  playerViews[model.state.activePlayer].removeActive();

  // check winner
  if (model.state.playerScores[model.state.activePlayer].total >= 100) {
    playerViews[model.state.activePlayer].setWinner();
    diceView.disableRoll();
    holdView.disableHold();
    return;
  }

  // switch player if there's no winner
  model.switchActivePlayer();
  playerViews[model.state.activePlayer].setActive();
};

const init: () => void = () => {
  model.setActivePlayer(0);
  controlNewGame();
  diceView.addRollHandler(controlRollDice);
  holdView.addClickHandler(controlHold);
  newGameView.addClickHandler(controlNewGame);
};

init();
