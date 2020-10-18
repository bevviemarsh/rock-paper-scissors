const d3 = require("d3");
const {
  DOMElementsFactory,
} = require("../../../utils/factory/DOMElementsFactory");
const { elements } = require("../../../utils/elements/elements");
const { barChartDimensions } = require("./chartDimensions");

const {
  basicWidth,
  svgWidth,
  basicHeight,
  svgHeight,
  graphPosition,
} = barChartDimensions;

function getBarChartContainer() {
  const svg = d3
    .select(DOMElementsFactory(elements.barChart))
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
  const barsGroup = chart.append("g");

  return {
    xAxisGroup,
    yAxisGroup,
    barsGroup,
  };
}

const { xAxisGroup, yAxisGroup, barsGroup } = getBarChartContainer();

module.exports.chartGroups = {
  xAxisGroup,
  yAxisGroup,
  barsGroup,
};
