import * as R from "ramda";
import styled from "styled-components";
import { colors } from "./constants";
import { ProgressChart } from "./ProgressChart";

const { map, addIndex } = R;

const mapWithIndex = addIndex(map);

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

export const Breadcrumb = () => {
  const onClick = (value) => {
    console.log("value:", value);
  };

  const size = 600;
  return (
    <Style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
      >
        <text
          x={size / 2}
          y={size / 2}
          textAnchor="middle"
          style={{ color: "#31CBFF", fontSize: "2rem", fill: colors.selected }}
        >
          Resources
        </text>
        {mapWithIndex(
          (values, i) => (
            <ProgressChart
              key={i}
              center={size / 2}
              radius={115 + i * 40}
              values={values}
              onClick={onClick}
              size="huge"
            />
          ),
          swimlanes
        )}
      </svg>
    </Style>
  );
};

const Style = styled.div`
  path {
    transition: 0.35s;
  }
`;
