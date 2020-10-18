const { actionTypes } = require("./actionTypes");

const getPlayerMove = (move) => {
  return {
    type: actionTypes.PLAYER_MOVE,
    move,
  };
};

const getAiMove = (move) => {
  return {
    type: actionTypes.AI_MOVE,
    move,
  };
};

const getIncrementPlayerRock = () => {
  return {
    type: actionTypes.INCREMENT_PLAYER_ROCK,
  };
};

const getIncrementPlayerPaper = () => {
  return {
    type: actionTypes.INCREMENT_PLAYER_PAPER,
  };
};

const getIncrementPlayerScissors = () => {
  return {
    type: actionTypes.INCREMENT_PLAYER_SCISSORS,
  };
};

const getIncrementAiRock = () => {
  return {
    type: actionTypes.INCREMENT_AI_ROCK,
  };
};

const getIncrementAiPaper = () => {
  return {
    type: actionTypes.INCREMENT_AI_PAPER,
  };
};

const getIncrementAiScissors = () => {
  return {
    type: actionTypes.INCREMENT_AI_SCISSORS,
  };
};

module.exports.getPlayerMove = getPlayerMove;
module.exports.getAiMove = getAiMove;
module.exports.incrementMoves = {
  getIncrementPlayerRock,
  getIncrementPlayerPaper,
  getIncrementPlayerScissors,
  getIncrementAiRock,
  getIncrementAiPaper,
  getIncrementAiScissors,
};
