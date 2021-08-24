import * as R from "ramda";
import styled from "styled-components";
import { colors } from "./constants";
import { ProgressChart } from "./ProgressChart";

const { map, addIndex } = R;

const mapWithIndex = addIndex(map);

const sprintValues = [
  ["resolved", [0, 40]],
  ["active", [40, 60]],
  ["planned", [60, 99.9]],
];

const swimlanes = [
  [
    ["resolved", [0, 40]],
    ["active", [40, 60]],
    ["planned", [60, 99.9]],
  ],
  [
    ["resolved", [0, 40]],
    ["active", [40, 60]],
    ["planned", [60, 99.9]],
  ],
  [
    ["resolved", [0, 20]],
    ["active", [20, 60]],
    ["planned", [60, 99.9]],
  ],
  [
    ["resolved", [0, 40]],
    ["active", [40, 60]],
    ["planned", [60, 99.9]],
  ],
];

export const ChosenFocus = () => {
  const onClick = (value) => {
    console.log("value:", value);
  };

  return (
    <Style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 400 400"
        width={400}
        height={400}
      >
        <text
          x={200}
          y={210}
          textAnchor="middle"
          style={{ color: "#31CBFF", fontSize: "2rem", fill: colors.selected }}
        >
          Week 3
        </text>
        <ProgressChart radius={100} values={sprintValues} onClick={onClick} />
        {mapWithIndex(
          (values, i) => (
            <ProgressChart
              key={i}
              radius={115 + i * 10}
              values={values}
              onClick={onClick}
              size="small"
            />
          ),
          swimlanes
        )}
      </svg>
    </Style>
  );
};

const Style = styled.div`
  circle {
    transition: stroke-dashoffset 0.35s;
    transform: rotate(270deg);
    transform-origin: 50% 50%;
  }
`;
