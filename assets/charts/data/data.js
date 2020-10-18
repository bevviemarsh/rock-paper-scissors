const {
  graphProperties,
} = require("../graphActionsAndProperties/graphProperties");
const { updatedBarChart } = require("../barChart/barChart");
const {
  updatedPlayerDoughnut,
} = require("../doughnutCharts/playerChart/playerDoughnutChart");
const {
  updatedAiDoughnut,
} = require("../doughnutCharts/aiChart/aiDoughnutChart");
const { updatedLollipopChart } = require("../lollipopChart/lollipopChart");
const { dataTools } = require("./dataTools");
const { isPlainObject } = require("lodash");
const { actions } = require("../../utils/actions/actions");
const { errors } = require("../../utils/elements/elements");

function fetchData(jsonData) {
  getDataForBarChart(
    dataTools.getImmutableData(jsonData, dataTools.dataKeys.stats)
  );

  getDataForDoughnutCharts(
    dataTools.getImmutableData(jsonData, dataTools.dataKeys.moves)
  );

  getDataForLollipopChart(
    dataTools.getImmutableData(jsonData, dataTools.dataKeys.winningGame)
  );
}

function getDataForBarChart(data) {
  if (!data || !isPlainObject(data)) {
    actions.handleErrors(
      errors.dataStructureError,
      errors.styledDataStructureError
    );
    return;
  }

  updatedBarChart(
    dataTools.getProperDataStructure(data).map((item, index) => ({
      id: index,
      x: item.type,
      y: item.value,
      text: `${item.type}: ${item.value}`,
    }))
  );
}

function getDataForDoughnutCharts(data) {
  if (!data || !isPlainObject(data)) {
    actions.handleErrors(
      errors.dataStructureError,
      errors.styledDataStructureError
    );
    return;
  }

  updatedPlayerDoughnut(
    dataTools
      .getProperDataStructure(
        data[dataTools.dataKeys.player][dataTools.dataKeys.playerValues]
      )
      .map((item, index) => ({
        id: index,
        type: item.type,
        value: item.value,
        text: `${item.type}: ${item.value}`,
      }))
  );

  updatedAiDoughnut(
    dataTools
      .getProperDataStructure(
        data[dataTools.dataKeys.ai][dataTools.dataKeys.aiValues]
      )
      .map((item, index) => ({
        id: index,
        type: item.type,
        value: item.value,
        text: `${item.type}: ${item.value}`,
      }))
  );
}

function getDataForLollipopChart(data) {
  if (!data || !isPlainObject(data)) {
    actions.handleErrors(
      errors.dataStructureError,
      errors.styledDataStructureError
    );
    return;
  }

  updatedLollipopChart(
    dataTools.getProperDataStructure(data).map((item, index) => ({
      id: index,
      text: `${item.type}: ${item.value}`,
      x1: 0,
      x2: item.value,
      y1: item.type,
      y2: item.type,
      cx: item.value,
      cy: item.type,
      type: item.type,
      value: item.value,
      r: graphProperties.circleRadius,
      strokeWidth: graphProperties.lineWidth,
      lineColor: graphProperties.colors.linesColor,
      circleColor: graphProperties.colors.circlesColor,
    }))
  );
}

module.exports.fetchData = fetchData;
