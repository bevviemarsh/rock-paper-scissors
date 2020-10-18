const { getWinningMove } = require("./getWinningMove");
const {
  getIncrementGameNumbers,
  getIncrementWin,
  getIncrementDraw,
  getIncrementLoss,
} = require("../store/actions/stats");
const { incrementMoves } = require("../store/actions/moves");
const { incrementWinningMoves } = require("../store/actions/winningGame");
const { DOMElementsFactory } = require("../utils/factory/DOMElementsFactory");
const { elements, gameResults } = require("../utils/elements/elements");
const { fetchData } = require("../charts/data/data");

const resultContent = DOMElementsFactory(elements.result);

function publishResult(store, result) {
  store.dispatch(getIncrementGameNumbers());

  if (result === gameResults.win) {
    store.dispatch(getIncrementWin());
    resultContent.textContent = gameResults.gameIsWinning;
  } else if (result === gameResults.draw) {
    store.dispatch(getIncrementDraw());
    resultContent.textContent = gameResults.gameIsDrawn;
  } else {
    store.dispatch(getIncrementLoss());
    resultContent.textContent = gameResults.gameIsLost;
  }

  if (store.getState().moves.player.playerMove === elements.rock) {
    store.dispatch(incrementMoves.getIncrementPlayerRock());
  } else if (store.getState().moves.player.playerMove === elements.paper) {
    store.dispatch(incrementMoves.getIncrementPlayerPaper());
  } else {
    store.dispatch(incrementMoves.getIncrementPlayerScissors());
  }

  if (store.getState().moves.ai.aiMove === elements.rock) {
    store.dispatch(incrementMoves.getIncrementAiRock());
  } else if (store.getState().moves.ai.aiMove === elements.paper) {
    store.dispatch(incrementMoves.getIncrementAiPaper());
  } else {
    store.dispatch(incrementMoves.getIncrementAiScissors());
  }

  const winningMove = getWinningMove(store);

  if (winningMove === elements.rock) {
    store.dispatch(incrementWinningMoves.getIncrementRockWinning());
  } else if (winningMove === elements.paper) {
    store.dispatch(incrementWinningMoves.getIncrementPaperWinning());
  } else if (winningMove === elements.scizzors) {
    store.dispatch(incrementWinningMoves.getIncrementScissorsWinning());
  }

  fetchData(JSON.stringify(store.getState()));
}

module.exports.publishResult = publishResult;
