module.exports.elements = {
  playerMove: "#player-move",
  aiMove: "ai-move-option",
  result: "result-text",
  playBtn: "play-btn",
  resetBtn: "reset-btn",
  lollipopChart: "lollipop-chart",
  barChart: "bar-chart",
  playerPieChart: "player-pie-chart",
  aiPieChart: "ai-pie-chart",
  rock: "rock",
  paper: "paper",
  scizzors: "scizzors",
  idPattern: /^#/,
  aiWarningContent: `What's your move?!`,
  currentValue: 0,
  previousValue: 0,
};

module.exports.styledElements = {
  borderColorPattern: /^#([0-9a-f]{3}){1,2}$/i,
  defaultBorder: "#1c292f",
  rockBorder: "#DE52A7",
  paperBorder: "#78F8AA",
  scizzorsBorder: "#64B5FD",
};

module.exports.gameResults = {
  stats: "stats",
  win: "win",
  loss: "loss",
  draw: "draw",
  gameIsWinning: "WIN!!!",
  gameIsDrawn: "DRAW...",
  gameIsLost: "LOOSER!!!",
};

module.exports.errors = {
  defaultError: `You're missing styles for error!!!`,
  styledDefaultError: "background: #F9E9EC; color: #412722; font-size: 20px",
  borderIsExpected: "Border color is expected",
  borderPatternError: `HEX color is required`,
  borderColorTypeError: "You need to pass a string",
  styledBorderError: "background: #86BA90; color: #DF2935; font-size: 20px",
  elementIsExpected: "Element is expected",
  styledElementError: "background: #2D3319; color: #FFD447; font-size: 20px",
  arrayIsExpected: "Array is expected",
  styledArrayError: "background: #720E07; color: #E6EFE9; font-size: 20px",
  idIsExpected: "Id is expected",
  idStringError: "Id must be a string",
  idPatternError: `Id must start with # in this case`,
  styledIdError: "background: #320D6D; color: #FFBFB7; font-size: 20px",
  dataStructureError:
    "Data in this place, ready for mapping, must be an array!!!",
  styledDataStructureError:
    "background: #FFE3DC; color: #D30C7B; font-size: 20px",
  stateError: `State, in this place, must be an object!!!`,
  styledStateError: "background: #632A50; color: #C2E812; font-size: 20px",
  dataBeforeImmutabilityError:
    "Data here is not json or key is not string or smth is generally wrong!",
  styledDataBeforeImmutabilityError:
    "background: #1A3A3A; color: #DDC4DD; font-size: 20px",
  dataStructureObjectError: "Data, in here, must be an object!",
  styledDataStructureObjectError:
    "background: #484538; color: #56A3A6; font-size: 20px",
  numberError: "Value must be a number!",
  styledNumberError: "background: #0D1321; color: #C5D86D; font-size: 20px",
};
