const { actions } = require("../assets/utils/actions/actions");

const {
  getProperBorder,
  getElementById,
  getAllElementsById,
  throwNewError,
  getProperPartOfState,
} = actions;

describe("get border color case", () => {
  const borderColorCases = {
    correct: "#11A22B",
    incorrect: {
      higherLetter: "#11P22S",
      noHash: "AAA222",
      noString: 1212,
      empty: "",
    },
  };

  const someBorderColor = `5px solid #11A22B`;
  const subStrBorderColor = "solid";

  test("correct border color pattern", () => {
    expect(getProperBorder(borderColorCases.correct)).toBe(someBorderColor);
    expect(getProperBorder(borderColorCases.correct)).toContain(
      subStrBorderColor
    );
  });

  test("some incorrect stuff", () => {
    expect(
      getProperBorder(borderColorCases.incorrect.higherLetter)
    ).toBeUndefined();
    expect(getProperBorder(borderColorCases.incorrect.noHash)).toBeUndefined();
    expect(
      getProperBorder(borderColorCases.incorrect.noString)
    ).toBeUndefined();
    expect(getProperBorder(borderColorCases.incorrect.empty)).toBeUndefined();
  });
});

describe("check id (one element) function", () => {
  const idCases = {
    correct: "bar",
    incorrect: {
      noId: "",
      noString: [1, 2, "232"],
    },
  };
  const exampleDiv = `<div id=${idCases.correct}></div>`;
  document.body.innerHTML = exampleDiv;

  test("get element with correct id", () => {
    expect(getElementById(idCases.correct)).toEqual(
      document.getElementById(idCases.correct)
    );
  });

  test("get element with no id", () => {
    expect(getElementById(idCases.incorrect.noId)).toBeUndefined();
  });

  test("get element with incorrect id", () => {
    expect(getElementById(idCases.incorrect.noString)).toBeUndefined();
  });
});

describe("check id (all elements) function", () => {
  const idCases = {
    correct: "#bar",
    incorrect: {
      noId: "",
      noString: [1, 2, "232"],
    },
  };

  const exampleDiv = `<div id=${idCases.correct}></div>`;
  const exampleButton = `<button id=${idCases.correct}></button>`;
  document.body.innerHTML = exampleDiv;
  document.body.innerHTML = exampleButton;

  test("get element with all ids", () => {
    expect(getAllElementsById(idCases.correct)).toEqual(
      document.querySelectorAll(idCases.correct)
    );
  });

  test("get element with no ids", () => {
    expect(getAllElementsById(idCases.incorrect.noId)).toBeUndefined();
  });

  test("get element with incorrect id", () => {
    expect(getAllElementsById(idCases.incorrect.noString)).toBeUndefined();
  });
});

describe("check if funcion throws", () => {
  test("function should throw an error", () => {
    expect(throwNewError).toThrow();
  });
});

describe("check if object has a correct form", () => {
  const validObject = {
    person: {
      bio: {
        name: "John",
        surname: "Doe",
      },
    },
    city: "Paris",
  };

  const validFirstKey = "person";
  const validSecondKey = "bio";

  const expectedObject = {
    name: "John",
    surname: "Doe",
  };

  const invalidObject = [{ name: "John", surname: "Doe" }];
  const invalidFirstKey = [];
  const invalidSecondKey = 12;

  test("function should return bio information", () => {
    expect(
      getProperPartOfState(validObject, validFirstKey, validSecondKey)
    ).toEqual(expectedObject);
  });

  test("function should return undefined", () => {
    expect(
      getProperPartOfState(invalidObject, validFirstKey, validSecondKey)
    ).toBeUndefined();
    expect(
      getProperPartOfState(validObject, invalidFirstKey, validSecondKey)
    ).toBeUndefined();
    expect(
      getProperPartOfState(validObject, validFirstKey, invalidSecondKey)
    ).toBeUndefined();
  });
});
