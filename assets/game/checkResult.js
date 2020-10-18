const { gameResults, elements } = require("../utils/elements/elements");

function checkResult(playerMove, aiMove) {
  if (playerMove === aiMove) {
    return gameResults.draw;
  } else if (
    (playerMove === elements.rock && aiMove === elements.scizzors) ||
    (playerMove === elements.paper && aiMove === elements.rock) ||
    (playerMove === elements.scizzors && aiMove === elements.paper)
  ) {
    return gameResults.win;
  } else {
    return gameResults.loss;
  }
}

module.exports.checkResult = checkResult;
