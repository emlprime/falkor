import * as R from "ramda";
import { colors } from "./constants";

const { map } = R;

export const CurrentFocus = () => {
  const center = 200;
  const currentRadius = 100;
  const currentStrokeWidth = 20;

  const circumference = 2 * Math.PI * currentRadius;
  const progress = 50;
  const currentProgress = ((100 - progress) / 100) * circumference;
  return (
    <div>
      foo
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
        <circle
          className="svg-circle"
          stroke={colors.resolved}
          cx={center}
          cy={center}
          r={currentRadius}
          strokeWidth={currentStrokeWidth}
          strokeDasharray={currentProgress}
          strokeDashoffset={circumference}
          fill="transparent"
          transform="rotate(90deg)"
        />
        {map(
          (i) => (
            <circle
              className="svg-circle"
              stroke={colors.resolved}
              cx={center}
              cy={center}
              r={currentRadius + 8 + i * 10}
              strokeWidth={5}
              strokeDasharray={currentProgress}
              strokeDashoffset={circumference}
              fill="transparent"
              transform="rotate(90deg)"
            />
          ),
          [1, 2, 3, 4]
        )}
      </svg>
    </div>
  );
};
