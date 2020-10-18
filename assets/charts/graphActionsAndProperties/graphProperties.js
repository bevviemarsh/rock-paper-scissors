const graphProperties = {
  margins: {
    margin: 10,
    marginTop: 20,
    marginBottom: 90,
    marginLeft: 50,
    marginRight: 70,
  },

  barPadding: 0.2,

  doughnutOuterRadius: 80,
  doughnutInnerRadius: () => this.graphProperties.doughnutOuterRadius / 1.3,

  colors: {
    axesColor: "#0F181C",
    linesColor: "#607D8B",
    circlesColor: "#FF5722",
    barsColor: "#C4AFFF",
  },

  circleRadius: 12,
  lineWidth: 3,
  cornerRadius: 3,

  durationTime: 400,

  yProperty: "y",
  valueProperty: "value",
};

module.exports.graphProperties = graphProperties;
