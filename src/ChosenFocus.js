import styled from "styled-components";
import { colors } from "./constants";

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = ["M", start.x, start.y, "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(" ");

  return d;
}

export const ChosenFocus = () => {
  const x = 200;
  const y = 200;
  const radius = 100;
  const startAngle = 90;
  const endAngle = 180;
  const arcConfig = describeArc(x, y, radius, startAngle, endAngle);
  console.log("arcConfig:", arcConfig);

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
          text-anchor="middle"
          style={{ color: "#31CBFF", fontSize: "2rem", fill: colors.selected }}
        >
          Week 3
        </text>
        const <path d={arcConfig} stroke={colors.planned} strokeWidth={5} fill="transparent" />}
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
