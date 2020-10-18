const { actionTypes } = require("../assets/store/actions/actionTypes");
const { moveReducer } = require("../assets/store/reducers/moves");

describe("check if player move reducer works", () => {
  const expectedInitialState = {
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

  const expectedUpdatedState = {
    player: {
      playerMove: "rock",
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

  test("it should return default state", () => {
    expect(moveReducer(undefined, {})).toEqual(expectedInitialState);
  });

  test("it should player move with rock", () => {
    expect(
      moveReducer(expectedInitialState, {
        type: actionTypes.PLAYER_MOVE,
        move: "rock",
      })
    ).toEqual(expectedUpdatedState);
  });
});

describe("check if ai move reducer works", () => {
  const expectedInitialState = {
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

  const expectedUpdatedState = {
    player: {
      playerMove: "",
      playerValues: {
        rock: 0,
        paper: 0,
        scissors: 0,
      },
    },
    ai: {
      aiMove: "scizzors",
      aiValues: {
        rock: 0,
        paper: 0,
        scissors: 0,
      },
    },
  };

  test("it should return default state", () => {
    expect(moveReducer(undefined, {})).toEqual(expectedInitialState);
  });

  test("it should ai move with scizzors", () => {
    expect(
      moveReducer(expectedInitialState, {
        type: actionTypes.AI_MOVE,
        move: "scizzors",
      })
    ).toEqual(expectedUpdatedState);
  });
});
