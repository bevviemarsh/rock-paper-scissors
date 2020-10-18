const { actionTypes } = require("../actions/actionTypes");
const { updateTools } = require("../utils");

const initialState = {
  gameNumbers: 0,
  win: 0,
  draw: 0,
  loss: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_GAME_NUMBERS:
      return updateTools.getUpdatedObject(state, {
        gameNumbers: state.gameNumbers + 1,
      });
    case actionTypes.INCREMENT_WIN:
      return updateTools.getUpdatedObject(state, { win: state.win + 1 });
    case actionTypes.INCREMENT_DRAW:
      return updateTools.getUpdatedObject(state, { draw: state.draw + 1 });
    case actionTypes.INCREMENT_LOSS:
      return updateTools.getUpdatedObject(state, { loss: state.loss + 1 });
    default:
      return state;
  }
};

module.exports.statsReducer = reducer;
