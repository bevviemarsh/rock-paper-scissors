const { styledElements, errors, elements } = require("../elements/elements");
const { isString, isPlainObject } = require("lodash");

module.exports.actions = {
  getProperBorder: (borderColor) => {
    if (!borderColor) {
      this.actions.handleErrors(
        errors.borderIsExpected,
        errors.styledBorderError
      );
      return;
    }

    if (!isString(borderColor)) {
      this.actions.handleErrors(
        errors.borderColorTypeError,
        errors.styledBorderError
      );
      return;
    }

    if (!styledElements.borderColorPattern.test(borderColor)) {
      this.actions.handleErrors(
        errors.borderPatternError,
        errors.styledBorderError
      );
      return;
    }

    return `5px solid ${borderColor}`;
  },

  getElementById: (id) => {
    if (!id) {
      this.actions.handleErrors(errors.idIsExpected, errors.styledIdError);
      return;
    }

    if (!isString(id)) {
      this.actions.handleErrors(errors.idStringError, errors.styledIdError);
      return;
    }

    return document.getElementById(id);
  },

  getAllElementsById: (id) => {
    if (!id) {
      this.actions.handleErrors(errors.idIsExpected, errors.styledIdError);
      return;
    }

    if (!isString(id)) {
      this.actions.handleErrors(errors.idStringError, errors.styledIdError);
      return;
    }

    if (!elements.idPattern.test(id)) {
      this.actions.handleErrors(errors.idPatternError, errors.styledIdError);
      return;
    }

    return document.querySelectorAll(id);
  },

  throwNewError: (errorText) => {
    throw new Error(errorText);
  },

  handleErrors: (
    errorContent = errors.defaultError,
    errorStyle = errors.styledDefaultError
  ) => {
    try {
      this.actions.throwNewError(errorContent);
    } catch (e) {
      console.log(`%c${e.name}: ${e.message}`, `${errorStyle}`);
    }
  },

  getProperPartOfState: (state, firstKey, secondKey) => {
    if (!isPlainObject(state)) {
      this.actions.handleErrors(errors.stateError, errors.styledStateError);
      return;
    }

    if (!isString(firstKey) || !isString(secondKey)) {
      this.actions.handleErrors(errors.stateError, errors.styledStateError);
      return;
    }

    return state[firstKey][secondKey];
  },
};
