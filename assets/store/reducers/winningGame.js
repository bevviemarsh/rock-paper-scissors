const { actionTypes } = require("../actions/actionTypes");
const { updateTools } = require("../utils");

const initialState = {
  rock: 0,
  paper: 0,
  scissors: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_ROCK_WINNING_GAME:
      return updateTools.getUpdatedObject(state, { rock: state.rock + 1 });
    case actionTypes.INCREMENT_PAPER_WINNING_GAME:
      return updateTools.getUpdatedObject(state, { paper: state.paper + 1 });
    case actionTypes.INCREMENT_SCISSORS_WINNING_GAME:
      return updateTools.getUpdatedObject(state, {
        scissors: state.scissors + 1,
      });
    default:
      return state;
  }
};

module.exports.winningGameReducer = reducer;
