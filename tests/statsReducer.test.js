const { actionTypes } = require("../assets/store/actions/actionTypes");
const { statsReducer } = require("../assets/store/reducers/stats");

describe("check if game numbers reducer works", () => {
  const expectedInitialState = {
    gameNumbers: 0,
    win: 0,
    draw: 0,
    loss: 0,
  };
  const expectedUpdatedState = {
    gameNumbers: 1,
    win: 0,
    draw: 0,
    loss: 0,
  };

  test("it should return initial state", () => {
    expect(statsReducer(undefined, {})).toEqual(expectedInitialState);
  });

  test("it should return incremented game numbers", () => {
    expect(
      statsReducer(expectedInitialState, {
        type: actionTypes.INCREMENT_GAME_NUMBERS,
      })
    ).toEqual(expectedUpdatedState);
  });
});

describe("check if win reducer works", () => {
  const expectedInitialState = {
    gameNumbers: 0,
    win: 0,
    draw: 0,
    loss: 0,
  };
  const expectedUpdatedState = {
    gameNumbers: 0,
    win: 1,
    draw: 0,
    loss: 0,
  };

  test("it should return initial state", () => {
    expect(statsReducer(undefined, {})).toEqual(expectedInitialState);
  });

  test("it should return incremented win property", () => {
    expect(
      statsReducer(expectedInitialState, { type: actionTypes.INCREMENT_WIN })
    ).toEqual(expectedUpdatedState);
  });
});

describe("check if draw reducer works", () => {
  const expectedInitialState = {
    gameNumbers: 0,
    win: 0,
    draw: 0,
    loss: 0,
  };
  const expectedUpdatedState = {
    gameNumbers: 0,
    win: 0,
    draw: 1,
    loss: 0,
  };

  test("it should return initial state", () => {
    expect(statsReducer(undefined, {})).toEqual(expectedInitialState);
  });

  test("it should return incremented draw property", () => {
    expect(
      statsReducer(expectedInitialState, { type: actionTypes.INCREMENT_DRAW })
    ).toEqual(expectedUpdatedState);
  });
});

describe("check if win reducer works", () => {
  const expectedInitialState = {
    gameNumbers: 0,
    win: 0,
    draw: 0,
    loss: 0,
  };
  const expectedUpdatedState = {
    gameNumbers: 0,
    win: 0,
    draw: 0,
    loss: 1,
  };

  test("it should return initial state", () => {
    expect(statsReducer(undefined, {})).toEqual(expectedInitialState);
  });

  test("it should return incremented loss property", () => {
    expect(
      statsReducer(expectedInitialState, { type: actionTypes.INCREMENT_LOSS })
    ).toEqual(expectedUpdatedState);
  });
});
