const d3 = require("d3");
const d3tip = require("d3-tip");
const { playerPieChart } = require("./chartContainer");
const {
  graphActions,
} = require("../../../graphActionsAndProperties/graphActions");

const tip = d3tip(d3);

function handleTooltips() {
  function getTooltipContent(d) {
    return `<div>${d.data.text}</div>`;
  }
  tip
    .attr("class", "tip")
    .offset(graphActions.getCalcultedTooltipPosition(50, 40))
    .html((d) => getTooltipContent(d));

  playerPieChart
    .selectAll("path")
    .call(tip)
    .on("mouseover", function (d, i, n) {
      tip.show(i, this);
    })
    .on("mouseout", function () {
      tip.hide();
    });
}

module.exports.handleTooltips = handleTooltips;
