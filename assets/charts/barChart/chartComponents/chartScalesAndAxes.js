const d3 = require("d3");
const {
  graphProperties,
} = require("../../graphActionsAndProperties/graphProperties");
const {
  graphActions,
} = require("../../graphActionsAndProperties/graphActions");
const { barChartDimensions } = require("./chartDimensions");
const { chartGroups } = require("./chartContainer");

const { graphWidth, graphHeight } = barChartDimensions;
const { xAxisGroup, yAxisGroup } = chartGroups;

function getScalesAndAxes() {
  const xScale = d3
    .scaleBand()
    .range([0, graphWidth])
    .padding(graphProperties.barPadding);
  const xAxis = xAxisGroup
    .attr("transform", graphActions.translate(0, graphHeight))
    .style("color", graphProperties.colors.axesColor)
    .style("stroke-width", "2px")
    .style("font-family", "Cairo")
    .style("font-size", "2vh");

  xAxis
    .call(d3.axisBottom(xScale))
    .selectAll("text")
    .attr("transform", "rotate(-45)")
    .attr("x", "-30");

  const yScale = d3.scaleLinear().range([graphHeight, 0]);
  const yAxis = yAxisGroup
    .style("color", graphProperties.colors.axesColor)
    .style("stroke-width", "2px")
    .style("font-family", "Cairo")
    .style("font-size", "3vh");

  yAxis
    .call(d3.axisLeft(yScale).ticks(3))
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
