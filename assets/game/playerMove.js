const { elements, styledElements } = require("../utils/elements/elements");
const { actions } = require("../utils/actions/actions");
const { getPlayerMove } = require("../store/actions/moves");
const { resetDOMElements } = require("./resetGame");

function handlePlayer(store, clickedElement) {
  resetDOMElements();

  if (clickedElement.dataset.option === elements.rock) {
    clickedElement.style.border = actions.getProperBorder(
      styledElements.rockBorder
    );
  } else if (clickedElement.dataset.option === elements.paper) {
    clickedElement.style.border = actions.getProperBorder(
      styledElements.paperBorder
    );
  } else if (clickedElement.dataset.option === elements.scizzors) {
    clickedElement.style.border = actions.getProperBorder(
      styledElements.scizzorsBorder
    );
  }

  store.dispatch(getPlayerMove(clickedElement.dataset.option));
}

module.exports.handlePlayer = handlePlayer;
