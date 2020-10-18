const {
  DOMElementsFactory,
} = require("../../../utils/factory/DOMElementsFactory");
const { elements } = require("../../../utils/elements/elements");
const {
  graphActions,
} = require("../../graphActionsAndProperties/graphActions");
const {
  graphProperties,
} = require("../../graphActionsAndProperties/graphProperties");
const { subtract } = require("lodash");

function getBarChartDimensions(barChartContainer) {
  const basicWidth = barChartContainer.offsetWidth;
  const svgWidth = subtract(basicWidth, graphProperties.margins.margin);
  const graphWidth = graphActions.subtractThreeValues(
    svgWidth,
    graphProperties.margins.marginLeft,
    graphProperties.margins.marginRight
  );

  const basicHeight = barChartContainer.offsetHeight;
  const svgHeight = subtract(basicHeight, graphProperties.margins.margin);
  const graphHeight = graphActions.subtractThreeValues(
    svgHeight,
    graphProperties.margins.marginTop,
    graphProperties.margins.marginBottom
  );

  const graphPosition = graphActions.translate(
    graphProperties.margins.marginRight,
    graphProperties.margins.marginTop
  );

  return {
    basicWidth,
    svgWidth,
    graphWidth,
    basicHeight,
    svgHeight,
    graphHeight,
    graphPosition,
  };
}

const {
  basicWidth,
  svgWidth,
  graphWidth,
  basicHeight,
  svgHeight,
  graphHeight,
  graphPosition,
} = getBarChartDimensions(DOMElementsFactory(elements.barChart));

module.exports.barChartDimensions = {
  basicWidth,
  svgWidth,
  graphWidth,
  basicHeight,
  svgHeight,
  graphHeight,
  graphPosition,
};
