const {
  DOMElementsFactory,
} = require("../../../../utils/factory/DOMElementsFactory");
const { elements } = require("../../../../utils/elements/elements");
const {
  graphActions,
} = require("../../../graphActionsAndProperties/graphActions");
const {
  graphProperties,
} = require("../../../graphActionsAndProperties/graphProperties");
const { subtract } = require("lodash");

function getAiPieChartDimensions(aiPieChartContainer) {
  const basicWidth = aiPieChartContainer.offsetWidth;
  const svgWidth = subtract(basicWidth, graphProperties.margins.margin);
  const graphWidth = graphActions.subtractThreeValues(
    svgWidth,
    graphProperties.margins.marginLeft,
    graphProperties.margins.marginRight
  );

  const basicHeight = aiPieChartContainer.offsetHeight;
  const svgHeight = subtract(basicHeight, graphProperties.margins.margin);
  const graphHeight = graphActions.subtractThreeValues(
    svgHeight,
    graphProperties.margins.marginTop,
    graphProperties.margins.marginBottom
  );

  const graphPosition = graphActions.translate(130, 110);

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
} = getAiPieChartDimensions(DOMElementsFactory(elements.aiPieChart));

module.exports.aiPieChartDimensions = {
  basicWidth,
  svgWidth,
  graphWidth,
  basicHeight,
  svgHeight,
  graphHeight,
  graphPosition,
};
