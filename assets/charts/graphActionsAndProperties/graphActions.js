const d3 = require("d3");
const { styledElements, errors } = require("../../utils/elements/elements");
const { actions } = require("../../utils/actions/actions");
const { isNumber } = require("lodash");
const { graphProperties } = require("./graphProperties");

const graphActions = {
  subtractThreeValues: (num1, num2, num3) => {
    if (!isNumber(num1) || !isNumber(num2) || !isNumber(num3)) {
      actions.handleErrors(errors.numberError, errors.styledNumberError);
      return;
    }

    return num1 - num2 - num3;
  },

  translate: (marginTopValue, marginRightValue) =>
    !isNumber(marginTopValue) || !isNumber(marginRightValue)
      ? `translate(0, 0)`
      : `translate(${marginTopValue}, ${marginRightValue})`,

  getCalculatedPieData: (data, dataKey) => {
    const pie = d3
      .pie()
      .sort(null)
      .value((d) => d[dataKey]);

    return pie(data);
  },

  getCalculatedArcPath: d3
    .arc()
    .outerRadius(graphProperties.doughnutOuterRadius)
    .innerRadius(graphProperties.doughnutInnerRadius())
    .cornerRadius(graphProperties.cornerRadius),

  getCalculatedPieColors: d3.scaleOrdinal([
    styledElements.rockBorder,
    styledElements.paperBorder,
    styledElements.scizzorsBorder,
  ]),

  getCalcultedTooltipPosition: (yPosition, xPosition) =>
    !isNumber(yPosition) || !isNumber(xPosition)
      ? [0, 0]
      : [yPosition, xPosition],

  getCalculatedAxisDomain: (value) => {
    if (!isNumber(value)) {
      actions.handleErrors(errors.numberError, errors.styledNumberError);
      return;
    }

    return value > 0 ? [0, value] : [0, 1];
  },
};

module.exports.graphActions = graphActions;
