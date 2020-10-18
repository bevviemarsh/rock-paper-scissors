const getUpdatedObject = (oldState, updatedValue) => {
  return {
    ...oldState,
    ...updatedValue,
  };
};

const getUpdatedDoubleNestedObject = (oldState, key, updatedValue) => {
  return {
    ...oldState,
    [key]: {
      ...oldState[key],
      ...updatedValue,
    },
  };
};

const getUpdatedTripleNestedObject = (
  oldState,
  firstKey,
  secondKey,
  updatedValue
) => {
  return {
    ...oldState,
    [firstKey]: {
      ...oldState[firstKey],
      [secondKey]: {
        ...oldState[firstKey][secondKey],
        ...updatedValue,
      },
    },
  };
};

module.exports.updateTools = {
  getUpdatedObject,
  getUpdatedDoubleNestedObject,
  getUpdatedTripleNestedObject,
};
