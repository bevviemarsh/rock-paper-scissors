const d3 = require("d3");
const { maxBy } = require("lodash");
const {
  graphProperties,
} = require("../graphActionsAndProperties/graphProperties");
const { graphActions } = require("../graphActionsAndProperties/graphActions");
const { chartGroups } = require("./chartComponents/chartContainer");
const { scalesAndAxes } = require("./chartComponents/chartScalesAndAxes");
const { handleTooltips } = require("./chartComponents/chartTooltips");

const { linesGroup, circlesGroup } = chartGroups;
const { xScale, yScale, xAxis, yAxis } = scalesAndAxes;

function renderView(data) {
  xScale.domain(
    graphActions.getCalculatedAxisDomain(
      maxBy(data, graphProperties.valueProperty)[graphProperties.valueProperty]
    )
  );
  yScale.domain(data.map((d) => d.type));

  xAxis
    .transition()
    .duration(graphProperties.durationTime)
    .call(d3.axisBottom(xScale).ticks(3))
    .selectAll("text")
    .attr("transform", "rotate(-45)")
    .attr("x", "-10");

  yAxis
    .transition()
    .duration(graphProperties.durationTime)
    .call(d3.axisLeft(yScale).tickSize(0))
    .selectAll("text")
    .attr("transform", "rotate(-45)")
    .attr("y", "-10");

  const lines = linesGroup.selectAll("line").data(data, (d) => d.id);
  const circles = circlesGroup.selectAll("circle").data(data, (d) => d.id);

  lines
    .enter()
    .append("line")
    .attr("x1", (d) => xScale(d.x1))
    .attr("x2", xScale(0))
    .attr("y1", (d) => yScale(d.y1))
    .attr("y2", (d) => yScale(d.y2))
    .attr("stroke", (d) => d.lineColor)
    .attr("stroke-width", (d) => d.strokeWidth)
    .merge(lines)
    .transition()
    .duration(graphProperties.durationTime)
    .attr("x2", (d) => xScale(d.x2));

  circles
    .enter()
    .append("circle")
    .attr("cx", xScale(0))
    .attr("cy", (d) => yScale(d.cy))
    .attr("r", (d) => d.r)
    .style("fill", (d) => d.circleColor)
    .merge(circles)
    .transition()
    .duration(graphProperties.durationTime)
    .attr("cx", (d) => xScale(d.cx));

  lines.exit().remove();
  circles.exit().remove();
}

function updatedLollipopChart(data) {
  renderView(data);
  handleTooltips();
}

module.exports.updatedLollipopChart = updatedLollipopChart;
