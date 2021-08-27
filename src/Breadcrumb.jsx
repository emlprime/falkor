import styled from "styled-components";
import {colors} from "./constants";
import {BreadcrumbQuarter} from "./BreadcrumbQuarter";

// const swimlanes = [
//   [
//     ["resolved", [0, 50]],
//     ["active", [50, 75]],
//     ["planned", [75, 99.9]],
//   ],
//   [
//     ["resolved", [0, 50]],
//     ["active", [50, 56.26]],
//     ["planned", [56.25, 75]],
//   ],
//   [
//     ["resolved", [0, 50]],
//     ["active", [50, 53]],
//     ["planned", [53, 56.25]],
//   ],
//   [
//     ["resolved", [0, 50]],
//     ["active", [50, 51]],
//     ["planned", [51, 53]],
//   ],
// ];

export const Breadcrumb = () => {
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
          style={{color: "#31CBFF", fontSize: "2rem", fill: colors.selected}}
        >
          Resources
        </text>
        <BreadcrumbQuarter />
      </svg>
    </Style>
  );
};

const Style = styled.div`
  path {
    transition: 0.35s;
  }
`;
