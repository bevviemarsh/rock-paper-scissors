const d3 = require("d3");
const d3tip = require("d3-tip");
const { chartGroups } = require("./chartContainer");
const {
  graphActions,
} = require("../../graphActionsAndProperties/graphActions");

const tip = d3tip(d3);
const { barsGroup } = chartGroups;

function handleTooltips() {
  function getTooltipContent(d) {
    return `<div>${d.text}</div>`;
  }
  tip
    .attr("class", "tip")
    .offset(graphActions.getCalcultedTooltipPosition(-10, 0))
    .html((d) => getTooltipContent(d));

  barsGroup
    .selectAll("rect")
    .call(tip)
    .on("mouseover", function (d, i, n) {
      tip.show(i, this);
    })
    .on("mouseout", function () {
      tip.hide();
    });
}

module.exports.handleTooltips = handleTooltips;
