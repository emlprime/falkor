import { colors } from "./constants";

const size = 600;
export const options = {
  colors: [colors.resolved, colors.active, colors.planned],
  chart: {
    width: size,
    height: size,
    outline: "1px solid white",
    type: "column",
    inverted: true,
    polar: true,
    color: colors.selected,
    backgroundColor: "transparent",
  },
  title: {
    text: "Resources",
    style: { color: colors.selected, fontSize: "2rem" },
  },
  tooltip: {
    outside: true,
  },
  pane: {
    size: "85%",
    innerSize: "20%",
    endAngle: 360,
  },
  xAxis: {
    tickInterval: 1,
    lineWidth: 0,
    categories: ["Quarter", "Release", "Sprint", "Day"],
  },
  legend: { enabled: false },
  yAxis: {
    lineWidth: 0,
    tickInterval: 45,
    reversedStacks: false,
    endOnTick: true,
    reversed: true,
  },
  plotOptions: {
    column: {
      stacking: "normal",
      borderWidth: 0,
      pointPadding: 0,
      groupPadding: 0.15,
    },
  },
  series: [
    {
      name: "Resolved",
      data: [180, 180, 180, 180],
    },
    {
      name: "Active",
      data: [5, 15, 45, 90],
    },
    {
      name: "Planned",
      data: [10, 30, 45, 90],
    },
  ],
};
