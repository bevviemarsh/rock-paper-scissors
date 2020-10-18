const { actionTypes } = require("../actions/actionTypes");
const { updateTools } = require("../utils");

const initialState = {
  player: {
    playerMove: "",
    playerValues: {
      rock: 0,
      paper: 0,
      scissors: 0,
    },
  },
  ai: {
    aiMove: "",
    aiValues: {
      rock: 0,
      paper: 0,
      scissors: 0,
    },
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PLAYER_MOVE:
      return updateTools.getUpdatedDoubleNestedObject(state, "player", {
        playerMove: action.move,
      });
    case actionTypes.AI_MOVE:
      return updateTools.getUpdatedDoubleNestedObject(state, "ai", {
        aiMove: action.move,
      });
    case actionTypes.INCREMENT_PLAYER_ROCK:
      return updateTools.getUpdatedTripleNestedObject(
        state,
        "player",
        "playerValues",
        {
          rock: state.player.playerValues.rock + 1,
        }
      );
    case actionTypes.INCREMENT_PLAYER_PAPER:
      return updateTools.getUpdatedTripleNestedObject(
        state,
        "player",
        "playerValues",
        {
          paper: state.player.playerValues.paper + 1,
        }
      );
    case actionTypes.INCREMENT_PLAYER_SCISSORS:
      return updateTools.getUpdatedTripleNestedObject(
        state,
        "player",
        "playerValues",
        {
          scissors: state.player.playerValues.scissors + 1,
        }
      );
    case actionTypes.INCREMENT_AI_ROCK:
      return updateTools.getUpdatedTripleNestedObject(state, "ai", "aiValues", {
        rock: state.ai.aiValues.rock + 1,
      });
    case actionTypes.INCREMENT_AI_PAPER:
      return updateTools.getUpdatedTripleNestedObject(state, "ai", "aiValues", {
        paper: state.ai.aiValues.paper + 1,
      });
    case actionTypes.INCREMENT_AI_SCISSORS:
      return updateTools.getUpdatedTripleNestedObject(state, "ai", "aiValues", {
        scissors: state.ai.aiValues.scissors + 1,
      });
    default:
      return state;
  }
};

module.exports.moveReducer = reducer;
