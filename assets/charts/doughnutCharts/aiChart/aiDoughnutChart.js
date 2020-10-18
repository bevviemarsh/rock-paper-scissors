const d3 = require("d3");
const { aiPieChart } = require("./chartComponents/chartContainer");
const {
  graphActions,
} = require("../../graphActionsAndProperties/graphActions");
const {
  graphProperties,
} = require("../../graphActionsAndProperties/graphProperties");
const { handleTooltips } = require("./chartComponents/chartTooltips");

function arcTweenEnter(d) {
  let i = d3.interpolate(d.endAngle, d.startAngle);

  return function (t) {
    d.startAngle = i(t);
    return graphActions.getCalculatedArcPath(d);
  };
}

function arcTweenUpdate(d) {
  let i = d3.interpolate(this._current, d);

  this._current = d;

  return function (t) {
    return graphActions.getCalculatedArcPath(i(t));
  };
}

function arcTweenExit(d) {
  let i = d3.interpolate(d.startAngle, d.endAngle);

  return function (t) {
    d.startAngle = i(t);
    return graphActions.getCalculatedArcPath(d);
  };
}

function renderView(data) {
  graphActions.getCalculatedPieColors.domain(data.map((d) => d.data.id));

  const paths = aiPieChart.selectAll("path").data(data, (d) => d.data.id);

  paths
    .enter()
    .append("path")
    .attr("fill", (d) => graphActions.getCalculatedPieColors(d.data.id))
    .each(function (d) {
      this._current = d;
    })
    .transition()
    .duration(graphProperties.durationTime)
    .attrTween("d", arcTweenEnter);

  paths
    .attr("d", graphActions.getCalculatedArcPath)
    .transition()
    .duration(graphProperties.durationTime)
    .attrTween("d", arcTweenUpdate);

  paths
    .exit()
    .transition()
    .duration(graphProperties.durationTime)
    .attrTween("d", arcTweenExit)
    .remove();
}

function updatedAiDoughnut(data) {
  renderView(graphActions.getCalculatedPieData(data, "value"));
  handleTooltips();
}

module.exports.updatedAiDoughnut = updatedAiDoughnut;
