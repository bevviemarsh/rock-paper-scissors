const { actionTypes } = require("./actionTypes");

const getIncrementGameNumbers = () => {
  return {
    type: actionTypes.INCREMENT_GAME_NUMBERS,
  };
};

const getIncrementWin = () => {
  return {
    type: actionTypes.INCREMENT_WIN,
  };
};

const getIncrementDraw = () => {
  return {
    type: actionTypes.INCREMENT_DRAW,
  };
};

const getIncrementLoss = () => {
  return {
    type: actionTypes.INCREMENT_LOSS,
  };
};

module.exports.getIncrementGameNumbers = getIncrementGameNumbers;
module.exports.getIncrementWin = getIncrementWin;
module.exports.getIncrementDraw = getIncrementDraw;
module.exports.getIncrementLoss = getIncrementLoss;
