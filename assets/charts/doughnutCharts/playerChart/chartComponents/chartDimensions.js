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

function getPlayerPieChartDimensions(playerPieChartContainer) {
  const basicWidth = playerPieChartContainer.offsetWidth;
  const svgWidth = subtract(basicWidth, graphProperties.margins.margin);
  const graphWidth = graphActions.subtractThreeValues(
    svgWidth,
    graphProperties.margins.marginLeft,
    graphProperties.margins.marginRight
  );

  const basicHeight = playerPieChartContainer.offsetHeight;
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
} = getPlayerPieChartDimensions(DOMElementsFactory(elements.playerPieChart));

module.exports.playerPieChartDimensions = {
  basicWidth,
  svgWidth,
  graphWidth,
  basicHeight,
  svgHeight,
  graphHeight,
  graphPosition,
};
