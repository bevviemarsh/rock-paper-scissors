const { shuffle, head, isArray } = require("lodash");
const { actions } = require("../utils/actions/actions");
const { errors } = require("../utils/elements/elements");

function handleAiMove(aiMoves) {
  if (!aiMoves || !isArray(aiMoves)) {
    actions.handleErrors(errors.arrayIsExpected, errors.styledArrayError);
    return;
  }

  return head(shuffle(aiMoves)).dataset.option;
}

module.exports.handleAiMove = handleAiMove;
