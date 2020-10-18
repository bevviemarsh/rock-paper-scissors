const { errors } = require("../../utils/elements/elements");
const { actions } = require("../../utils/actions/actions");
const { isString, isPlainObject } = require("lodash");

const dataTools = {
  dataKeys: {
    moves: "moves",
    stats: "stats",
    winningGame: "winningGame",
    ai: "ai",
    aiValues: "aiValues",
    player: "player",
    playerValues: "playerValues",
  },

  getImmutableData: (jsonData, key) => {
    if (!jsonData || !isString(key)) {
      actions.handleErrors(
        errors.dataBeforeImmutabilityError,
        errors.styledDataBeforeImmutabilityError
      );
      return;
    }

    return Object.assign({}, JSON.parse(jsonData))[key];
  },

  getProperDataStructure: (data) => {
    if (!isPlainObject(data)) {
      actions.handleErrors(
        errors.dataStructureObjectError,
        errors.styledDataStructureObjectError
      );
      return;
    }

    return Object.entries(data).map((item) => ({
      type: item[0],
      value: item[1],
    }));
  },
};

module.exports.dataTools = dataTools;
