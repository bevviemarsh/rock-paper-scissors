const { actionTypes } = require("../assets/store/actions/actionTypes");
const {
  incrementWinningMoves,
} = require("../assets/store/actions/winningGame");

const {
  getIncrementRockWinning,
  getIncrementPaperWinning,
  getIncrementScissorsWinning,
} = incrementWinningMoves;

describe("check winningGame actions", () => {
  const expectedRockWinning = {
    type: actionTypes.INCREMENT_ROCK_WINNING_GAME,
  };

  const expectedPaperWinning = {
    type: actionTypes.INCREMENT_PAPER_WINNING_GAME,
  };

  const expectedScissorskWinning = {
    type: actionTypes.INCREMENT_SCISSORS_WINNING_GAME,
  };

  test("verify rock winning increment", () => {
    expect(getIncrementRockWinning()).toEqual(expectedRockWinning);
  });

  test("verify paper winning increment", () => {
    expect(getIncrementPaperWinning()).toEqual(expectedPaperWinning);
  });

  test("verify scissors winning increment", () => {
    expect(getIncrementScissorsWinning()).toEqual(expectedScissorskWinning);
  });
});
