const { elements, errors } = require("../elements/elements");
const { actions } = require("../actions/actions");

function getCreatedDOMElements(element) {
  if (!element) {
    actions.handleErrors(errors.elementIsExpected, errors.styledElementError);
  }

  switch (element) {
    case elements.playerMove:
      return [...actions.getAllElementsById(elements.playerMove)];
    case elements.aiWarning:
      return actions.getElementById(elements.aiWarning);
    case elements.aiMove:
      return actions.getElementById(elements.aiMove);
    case elements.result:
      return actions.getElementById(elements.result);
    case elements.playBtn:
      return actions.getElementById(elements.playBtn);
    case elements.resetBtn:
      return actions.getElementById(elements.resetBtn);
    case elements.barChart:
      return actions.getElementById(elements.barChart);
    case elements.playerPieChart:
      return actions.getElementById(elements.playerPieChart);
    case elements.aiPieChart:
      return actions.getElementById(elements.aiPieChart);
    case elements.lollipopChart:
      return actions.getElementById(elements.lollipopChart);
    default:
      return;
  }
}

module.exports.DOMElementsFactory = getCreatedDOMElements;
