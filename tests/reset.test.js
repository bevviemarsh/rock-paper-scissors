const { actionTypes } = require("../assets/store/actions/actionTypes");
const { getDataCleared } = require("../assets/store/actions/reset");

describe("check winningGame actions", () => {
  const expectedDataCleared = {
    type: actionTypes.CLEAR_DATA,
  };

  test("verify clearing data", () => {
    expect(getDataCleared()).toEqual(expectedDataCleared);
  });
});
