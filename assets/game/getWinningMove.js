const { elements, gameResults } = require("../utils/elements/elements");
const { actions } = require("../utils/actions/actions");

let { currentValue, previousValue } = elements;

function getWinningMove(store) {
  previousValue = currentValue;
  currentValue = actions.getProperPartOfState(
    store.getState(),
    gameResults.stats,
    gameResults.win
  );

  if (previousValue !== currentValue) {
    return store.getState().moves.player.playerMove;
  } else {
    return;
  }
}

module.exports.getWinningMove = getWinningMove;
