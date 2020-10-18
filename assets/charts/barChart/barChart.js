const d3 = require("d3");
const { maxBy, subtract } = require("lodash");
const {
  graphProperties,
} = require("../graphActionsAndProperties/graphProperties");
const { graphActions } = require("../graphActionsAndProperties/graphActions");
const { barChartDimensions } = require("./chartComponents/chartDimensions");
const { chartGroups } = require("./chartComponents/chartContainer");
const { scalesAndAxes } = require("./chartComponents/chartScalesAndAxes");
const { handleTooltips } = require("./chartComponents/chartTooltips");

const { graphHeight } = barChartDimensions;
const { barsGroup } = chartGroups;
const { xScale, yScale, xAxis, yAxis } = scalesAndAxes;

function renderView(data) {
  xScale.domain(data.map((d) => d.x));
  yScale.domain(
    graphActions.getCalculatedAxisDomain(
      maxBy(data, graphProperties.yProperty)[graphProperties.yProperty]
    )
  );

  xAxis
    .transition()
    .duration(graphProperties.durationTime)
    .call(d3.axisBottom(xScale))
    .selectAll("text")
    .attr("transform", "rotate(-45)")
    .attr("x", "-30");

  yAxis
    .transition()
    .duration(graphProperties.durationTime)
    .call(d3.axisLeft(yScale).ticks(3))
    .selectAll("text")
    .attr("transform", "rotate(-45)")
    .attr("y", "-10");

  const bars = barsGroup.selectAll("rect").data(data, (d) => d.id);

  bars
    .enter()
    .append("rect")
    .attr("x", (d) => xScale(d.x))
    .attr("y", graphHeight)
    .attr("height", 0)
    .attr("width", xScale.bandwidth())
    .attr("fill", graphProperties.colors.barsColor)
    .merge(bars)
    .transition()
    .duration(graphProperties.durationTime)
    .attr("y", (d) => yScale(d.y))
    .attr("height", (d) => subtract(graphHeight, yScale(d.y)));

  bars.exit().remove();
}

function updatedBarChart(data) {
  renderView(data);
  handleTooltips();
}

module.exports.updatedBarChart = updatedBarChart;
