const { combineReducers } = require("redux");
const { moveReducer } = require("./moves");
const { statsReducer } = require("./stats");
const { winningGameReducer } = require("./winningGame");
const { actionTypes } = require("../actions/actionTypes");

const appReducer = combineReducers({
  moves: moveReducer,
  stats: statsReducer,
  winningGame: winningGameReducer,
});

const rootReducer = (state, action) => {
  if (action.type === actionTypes.CLEAR_DATA) {
    state = undefined;
  }

  return appReducer(state, action);
};

module.exports.rootReducer = rootReducer;
