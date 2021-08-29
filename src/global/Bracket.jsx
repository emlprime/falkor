import * as R from "ramda";
import {colors} from "./constants";

const {add, subtract} = R;

const calcD = ({
  originX,
  originY,
  breakoffWidth,
  breakoffSplit,
  breakoffHeight,
  bottomAngleHeight,
}) => {
  const breakoffX = add(breakoffWidth, originX);
  const breakoffY = subtract(originY, breakoffHeight);
  const breakoffSplitX = add(breakoffSplit, breakoffX);
  const topAngleX = add(10, breakoffSplitX);
  const topAngleY = subtract(breakoffY, 40);
  const topSplitX = add(50, topAngleX);
  const bottomAngleX = add(10, breakoffSplitX);
  const bottomAngleY = add(bottomAngleHeight, breakoffY);
  const bottomSplitX = add(50, bottomAngleX);
  return {
    d: `M${originX} ${originY}L${breakoffX} ${breakoffY}H${breakoffSplitX} L${topAngleX} ${topAngleY}H${topSplitX} M${breakoffSplitX} ${breakoffY}L${bottomAngleX} ${bottomAngleY}H${bottomSplitX}`,
    subComponentX: add(10, topAngleX),
    subComponentY: add(10, topAngleY),
  };
};

export function Bracket({Component, ...props}) {
  const {d, subComponentX, subComponentY} = calcD(props);

  return (
    <g>
      <path d={d} stroke={colors.selected} fill="transparent" />
      <foreignObject
        x={subComponentX}
        y={subComponentY}
        width="180"
        height="155"
      >
        <Component />
      </foreignObject>
    </g>
  );
}
