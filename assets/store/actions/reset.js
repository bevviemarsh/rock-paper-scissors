const { actionTypes } = require("./actionTypes");

const getDataCleared = () => {
  return {
    type: actionTypes.CLEAR_DATA,
  };
};

module.exports.getDataCleared = getDataCleared;
