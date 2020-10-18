const { getDataCleared } = require("../store/actions/reset");
const { fetchData } = require("../charts/data/data");
const { DOMElementsFactory } = require("../utils/factory/DOMElementsFactory");
const { elements, styledElements } = require("../utils/elements/elements");
const { actions } = require("../utils/actions/actions");
const { forEach } = require("lodash");

function resetGraphs(graphData) {
  fetchData(JSON.stringify(graphData));
}

function resetDOMElements() {
  DOMElementsFactory(elements.result).textContent = "";
  DOMElementsFactory(elements.aiMove).textContent = "";
  forEach(
    DOMElementsFactory(elements.playerMove),
    (move) =>
      (move.style.border = actions.getProperBorder(
        styledElements.defaultBorder
      ))
  );
}

function resetGame(store) {
  store.dispatch(getDataCleared());

  resetGraphs(store.getState());
  resetDOMElements();
}

module.exports.resetGame = resetGame;
module.exports.resetDOMElements = resetDOMElements;
