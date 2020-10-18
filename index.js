const {
  DOMElementsFactory,
} = require("./assets/utils/factory/DOMElementsFactory");
const { elements } = require("./assets/utils/elements/elements");
const { handlePlayer } = require("./assets/game/playerMove");
const { forEach } = require("lodash");
const { createStore } = require("redux");
const { rootReducer } = require("./assets/store/reducers/reducers");
const { startGame } = require("./assets/game/startGame");
const { resetGame } = require("./assets/game/resetGame");
const { getPlayerMove } = require("./assets/store/actions/moves");

const store = createStore(rootReducer);

const moves = DOMElementsFactory(elements.playerMove);

forEach(moves, (move) =>
  move.addEventListener("click", (e) => handlePlayer(store, e.target))
);

DOMElementsFactory(elements.playBtn).addEventListener("click", () => {
  startGame(store, moves);
  store.dispatch(getPlayerMove(""));
});

DOMElementsFactory(elements.resetBtn).addEventListener("click", () => {
  resetGame(store);
});
