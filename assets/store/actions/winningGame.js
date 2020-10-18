const { actionTypes } = require("./actionTypes");

const getIncrementRockWinning = () => {
  return {
    type: actionTypes.INCREMENT_ROCK_WINNING_GAME,
  };
};

const getIncrementPaperWinning = () => {
  return {
    type: actionTypes.INCREMENT_PAPER_WINNING_GAME,
  };
};

const getIncrementScissorsWinning = () => {
  return {
    type: actionTypes.INCREMENT_SCISSORS_WINNING_GAME,
  };
};

module.exports.incrementWinningMoves = {
  getIncrementRockWinning,
  getIncrementPaperWinning,
  getIncrementScissorsWinning,
};
