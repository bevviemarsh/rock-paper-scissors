const d3 = require("d3");
const {
  DOMElementsFactory,
} = require("../../../utils/factory/DOMElementsFactory");
const { elements } = require("../../../utils/elements/elements");
const { lollipopChartDimensions } = require("./chartDimensions");

const {
  basicWidth,
  svgWidth,
  basicHeight,
  svgHeight,
  graphPosition,
} = lollipopChartDimensions;

function getLollipopChartContainer() {
  const svg = d3
    .select(DOMElementsFactory(elements.lollipopChart))
    .append("svg")
    .attr("width", basicWidth)
    .attr("height", basicHeight)
    .append("g");

  const chart = svg
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("transform", graphPosition)
    .append("g");

  const xAxisGroup = chart.append("g");
  const yAxisGroup = chart.append("g");
  const linesGroup = chart.append("g");
  const circlesGroup = chart.append("g");

  return {
    xAxisGroup,
    yAxisGroup,
    linesGroup,
    circlesGroup,
  };
}

const {
  xAxisGroup,
  yAxisGroup,
  linesGroup,
  circlesGroup,
} = getLollipopChartContainer();

module.exports.chartGroups = {
  xAxisGroup,
  yAxisGroup,
  linesGroup,
  circlesGroup,
};
