const { dataTools } = require("../assets/charts/data/dataTools");

const { getImmutableData, getProperDataStructure } = dataTools;

describe("check if immutability function works properly", () => {
  const validData = {
    person: {
      firstName: "John",
      secondName: "Doe",
    },
  };

  const validKey = "person";

  const expectedData = {
    firstName: "John",
    secondName: "Doe",
  };

  const invalidData = {};
  const invalidKey = [];

  test("should return copied data", () => {
    expect(getImmutableData(JSON.stringify(validData), validKey)).toEqual(
      expectedData
    );
  });

  test("should return undefined", () => {
    expect(
      getImmutableData(JSON.stringify(invalidData), validData)
    ).toBeUndefined();
    expect(
      getImmutableData(JSON.stringify(validData), invalidKey)
    ).toBeUndefined();
  });
});

describe("check if function for structuring data before mapping for charts works", () => {
  const validData = {
    win: 1,
    draw: 2,
  };

  const expectedData = [
    { type: "win", value: 1 },
    { type: "draw", value: 2 },
  ];

  const invalidData = [{ win: 1 }, { draw: 1 }];

  test("should return expectedData", () => {
    expect(getProperDataStructure(validData)).toEqual(expectedData);
  });

  test("should return undefined", () => {
    expect(getProperDataStructure(invalidData)).toBeUndefined();
  });
});
