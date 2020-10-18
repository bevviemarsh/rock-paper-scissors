const d3 = require("d3");
const {
  graphProperties,
} = require("../../graphActionsAndProperties/graphProperties");
const {
  graphActions,
} = require("../../graphActionsAndProperties/graphActions");
const { lollipopChartDimensions } = require("./chartDimensions");
const { chartGroups } = require("./chartContainer");

const { graphWidth, graphHeight } = lollipopChartDimensions;
const { xAxisGroup, yAxisGroup } = chartGroups;

function getScalesAndAxes() {
  const xScale = d3.scaleLinear().range([0, graphWidth]);
  const xAxis = xAxisGroup
    .attr("transform", graphActions.translate(0, graphHeight))
    .style("color", graphProperties.colors.axesColor)
    .style("stroke-width", "2px")
    .style("font-family", "Cairo")
    .style("font-size", "2vh");

  xAxis
    .call(d3.axisBottom(xScale).ticks(3))
    .selectAll("text")
    .attr("transform", "rotate(-45)")
    .attr("x", "-10");

  const yScale = d3.scaleBand().range([0, graphHeight]).padding(1);
  const yAxis = yAxisGroup
    .style("color", graphProperties.colors.axesColor)
    .style("stroke-width", "2px")
    .style("font-family", "Cairo")
    .style("font-size", "3vh");

  yAxis
    .call(d3.axisLeft(yScale).tickSize(0).tickPadding(10))
    .selectAll("text")
    .attr("transform", "rotate(-45)")
    .attr("y", "-10");

  return {
    xScale,
    yScale,
    xAxis,
    yAxis,
  };
}

const { xScale, yScale, xAxis, yAxis } = getScalesAndAxes();

module.exports.scalesAndAxes = {
  xScale,
  yScale,
  xAxis,
  yAxis,
};
