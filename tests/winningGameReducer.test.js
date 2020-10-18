const { actionTypes } = require("../assets/store/actions/actionTypes");
const { winningGameReducer } = require("../assets/store/reducers/winningGame");

describe("check if winning rock move reducer works", () => {
  const expectedInitialState = {
    rock: 0,
    paper: 0,
    scissors: 0,
  };
  const expectedUpdatedState = {
    rock: 1,
    paper: 0,
    scissors: 0,
  };

  test("it should return initial state", () => {
    expect(winningGameReducer(undefined, {})).toEqual(expectedInitialState);
  });

  test("it should return incremented rock property", () => {
    expect(
      winningGameReducer(expectedInitialState, {
        type: actionTypes.INCREMENT_ROCK_WINNING_GAME,
      })
    ).toEqual(expectedUpdatedState);
  });
});

describe("check if winning paper move reducer works", () => {
  const expectedInitialState = {
    rock: 0,
    paper: 0,
    scissors: 0,
  };
  const expectedUpdatedState = {
    rock: 0,
    paper: 1,
    scissors: 0,
  };

  test("it should return initial state", () => {
    expect(winningGameReducer(undefined, {})).toEqual(expectedInitialState);
  });

  test("it should return incremented paper property", () => {
    expect(
      winningGameReducer(expectedInitialState, {
        type: actionTypes.INCREMENT_PAPER_WINNING_GAME,
      })
    ).toEqual(expectedUpdatedState);
  });
});

describe("check if winning scissors move reducer works", () => {
  const expectedInitialState = {
    rock: 0,
    paper: 0,
    scissors: 0,
  };
  const expectedUpdatedState = {
    rock: 0,
    paper: 0,
    scissors: 1,
  };

  test("it should return initial state", () => {
    expect(winningGameReducer(undefined, {})).toEqual(expectedInitialState);
  });

  test("it should return incremented scissors property", () => {
    expect(
      winningGameReducer(expectedInitialState, {
        type: actionTypes.INCREMENT_SCISSORS_WINNING_GAME,
      })
    ).toEqual(expectedUpdatedState);
  });
});
