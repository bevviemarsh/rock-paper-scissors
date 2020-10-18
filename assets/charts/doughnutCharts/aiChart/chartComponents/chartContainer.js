const d3 = require("d3");
const {
  DOMElementsFactory,
} = require("../../../../utils/factory/DOMElementsFactory");
const { elements } = require("../../../../utils/elements/elements");
const { aiPieChartDimensions } = require("./chartDimensions");

const {
  basicWidth,
  svgWidth,
  basicHeight,
  svgHeight,
  graphPosition,
} = aiPieChartDimensions;

function getAiPieChartContainer() {
  const svg = d3
    .select(DOMElementsFactory(elements.aiPieChart))
    .append("svg")
    .attr("width", basicWidth)
    .attr("height", basicHeight)
    .append("g");

  const chart = svg
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("transform", graphPosition)
    .append("g");

  return chart;
}

const chart = getAiPieChartContainer();

module.exports.aiPieChart = chart;
