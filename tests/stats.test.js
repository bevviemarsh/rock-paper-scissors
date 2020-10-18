const { actionTypes } = require("../assets/store/actions/actionTypes");
const {
  getIncrementGameNumbers,
  getIncrementWin,
  getIncrementDraw,
  getIncrementLoss,
} = require("../assets/store/actions/stats");

describe("check stats actions", () => {
  const expectedGameNumbersAction = {
    type: actionTypes.INCREMENT_GAME_NUMBERS,
  };
  const expectedWinAction = {
    type: actionTypes.INCREMENT_WIN,
  };
  const expectedDrawAction = {
    type: actionTypes.INCREMENT_DRAW,
  };
  const expectedLossAction = {
    type: actionTypes.INCREMENT_LOSS,
  };

  test("verify game numbers increment", () => {
    expect(getIncrementGameNumbers()).toEqual(expectedGameNumbersAction);
  });

  test("verify game numbers increment", () => {
    expect(getIncrementWin()).toEqual(expectedWinAction);
  });

  test("verify game numbers increment", () => {
    expect(getIncrementDraw()).toEqual(expectedDrawAction);
  });

  test("verify game numbers increment", () => {
    expect(getIncrementLoss()).toEqual(expectedLossAction);
  });
});
