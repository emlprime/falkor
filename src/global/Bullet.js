import * as R from "ramda";
import {colors} from "./constants";

const {prop} = R;

export const Bullet = ({status, size = 30}) => {
  const viewBoxSize = size + 1;
  const center = size / 2;
  const outerCircleRadius = size / 2;
  const innerCircleRadius = size / 5;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      width={viewBoxSize}
      height={viewBoxSize}
    >
      <circle
        cx={center}
        cy={center}
        r={outerCircleRadius - 2}
        stroke={colors.RESOLVED}
        strokeWidth="3"
        fill="transparent"
      />
      <circle
        cx={center}
        cy={center}
        r={innerCircleRadius}
        fill={prop(status, colors)}
      />
    </svg>
  );
};
