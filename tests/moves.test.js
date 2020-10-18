const { actionTypes } = require("../assets/store/actions/actionTypes");
const {
  getPlayerMove,
  getAiMove,
  incrementMoves,
} = require("../assets/store/actions/moves");

const {
  getIncrementPlayerRock,
  getIncrementPlayerPaper,
  getIncrementPlayerScissors,
  getIncrementAiRock,
  getIncrementAiPaper,
  getIncrementAiScissors,
} = incrementMoves;

describe("check moves actions", () => {
  const playerMove = "paper";
  const aiMove = "rock";

  const expectedPlayerAction = {
    type: actionTypes.PLAYER_MOVE,
    move: playerMove,
  };
  const expectedAiAction = {
    type: actionTypes.AI_MOVE,
    move: aiMove,
  };

  const expectedIncrementPlayerRock = {
    type: actionTypes.INCREMENT_PLAYER_ROCK,
  };

  const expectedIncrementPlayerPaper = {
    type: actionTypes.INCREMENT_PLAYER_PAPER,
  };

  const expectedIncrementPlayerScissors = {
    type: actionTypes.INCREMENT_PLAYER_SCISSORS,
  };

  const expectedIncrementAiRock = {
    type: actionTypes.INCREMENT_AI_ROCK,
  };

  const expectedIncrementAiPaper = {
    type: actionTypes.INCREMENT_AI_PAPER,
  };

  const expectedIncrementAiScissors = {
    type: actionTypes.INCREMENT_AI_SCISSORS,
  };

  test("verify player move", () => {
    expect(getPlayerMove(playerMove)).toEqual(expectedPlayerAction);
  });

  test("verify ai move", () => {
    expect(getAiMove(aiMove)).toEqual(expectedAiAction);
  });

  test("verify increment player rock", () => {
    expect(getIncrementPlayerRock()).toEqual(expectedIncrementPlayerRock);
  });

  test("verify increment player paper", () => {
    expect(getIncrementPlayerPaper()).toEqual(expectedIncrementPlayerPaper);
  });

  test("verify increment player scissors", () => {
    expect(getIncrementPlayerScissors()).toEqual(
      expectedIncrementPlayerScissors
    );
  });

  test("verify increment ai rock", () => {
    expect(getIncrementAiRock()).toEqual(expectedIncrementAiRock);
  });

  test("verify increment ai paper", () => {
    expect(getIncrementAiPaper()).toEqual(expectedIncrementAiPaper);
  });

  test("verify increment ai scissors", () => {
    expect(getIncrementAiScissors()).toEqual(expectedIncrementAiScissors);
  });
});
