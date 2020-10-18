const {
  graphActions,
} = require("../assets/charts/graphActionsAndProperties/graphActions");

const {
  subtractThreeValues,
  translate,
  getCalcultedTooltipPosition,
  getCalculatedAxisDomain,
} = graphActions;

describe("check if subtractThreeValues function works", () => {
  const num1 = 20;
  const num2 = 10;
  const num3 = 5;

  const expectedValue = 5;

  const invalidNum4 = "12";

  test("should return epxectedValue", () => {
    expect(subtractThreeValues(num1, num2, num3)).toBe(expectedValue);
  });

  test("should return undefined", () => {
    expect(subtractThreeValues(num1, num2, invalidNum4)).toBeUndefined();
  });
});

describe("check if translate function works", () => {
  const marginTopValue = 20;
  const marginRightValue = 50;

  const expectedValue = `translate(${marginTopValue}, ${marginRightValue})`;

  const invalidMarginValue = "50";
  const expectedValueErrorCase = `translate(0, 0)`;

  test("should return expected value", () => {
    expect(translate(marginTopValue, marginRightValue)).toBe(expectedValue);
  });

  test("should return expected value in case of error", () => {
    expect(translate(marginTopValue, invalidMarginValue)).toBe(
      expectedValueErrorCase
    );
  });
});

describe("check if getTooltipPositon function works", () => {
  const yPosition = 20;
  const xPosition = 10;

  const expectedPosition = [20, 10];

  const invalidValuePosition = "20";
  const expectedPositionErrorCase = [0, 0];

  test("should return expectedPosition", () => {
    expect(getCalcultedTooltipPosition(yPosition, xPosition)).toEqual(
      expectedPosition
    );
  });

  test("should return expectedPosition in case of error", () => {
    expect(
      getCalcultedTooltipPosition(yPosition, invalidValuePosition)
    ).toStrictEqual(expectedPositionErrorCase);
  });
});

describe("check if getCalculatedAxisDomain function works", () => {
  const valueGreaterThanZero = 50;
  const valueEqualToZero = 0;

  const expectedValuesGreaterThenZeroCase = [0, valueGreaterThanZero];
  const expectedValuesEqualToZeroCase = [0, 1];

  const invalidValue = "20";

  test("should return correct values", () => {
    expect(getCalculatedAxisDomain(valueGreaterThanZero)).toStrictEqual(
      expectedValuesGreaterThenZeroCase
    );
    expect(getCalculatedAxisDomain(valueEqualToZero)).toStrictEqual(
      expectedValuesEqualToZeroCase
    );
  });

  test("should return undefinded", () => {
    expect(getCalculatedAxisDomain(invalidValue)).toBeUndefined();
  });
});
