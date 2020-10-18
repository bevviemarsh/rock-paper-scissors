const { handleAiMove } = require("./aiMove");
const { DOMElementsFactory } = require("../utils/factory/DOMElementsFactory");
const { elements, styledElements } = require("../utils/elements/elements");
const { actions } = require("../utils/actions/actions");
const { getAiMove } = require("../store/actions/moves");
const { checkResult } = require("./checkResult");
const { publishResult } = require("./publishResult");
const { forEach } = require("lodash");

function startGame(store, moves) {
  if (!store.getState().moves.player.playerMove) {
    DOMElementsFactory(elements.aiMove).textContent = elements.aiWarningContent;
    DOMElementsFactory(elements.result).textContent = "";

    return;
  }

  store.dispatch(getAiMove(handleAiMove(moves)));

  DOMElementsFactory(
    elements.aiMove
  ).textContent = store.getState().moves.ai.aiMove;

  forEach(
    moves,
    (move) =>
      (move.style.border = actions.getProperBorder(
        styledElements.defaultBorder
      ))
  );

  publishResult(
    store,
    checkResult(
      store.getState().moves.player.playerMove,
      store.getState().moves.ai.aiMove
    )
  );
}

module.exports.startGame = startGame;
