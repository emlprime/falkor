import * as R from "ramda";
import {colors} from "./constants";

const {map, addIndex} = R;

const mapWithIndex = addIndex(map);

const data = [
  [0, 10, 0, 0], // mon
  [3, 7, 0, 0], // tue
  [5, 5, 0, 3], // wed
  [8, 2, 2, 1], // thu
];
const barWidth = 20;
const barHeightMultiplier = 10;

const Bar = ({x, y, height, fill}) => (
  <rect x={x} y={y} width={barWidth} height={height} fill={fill} />
);

export function BurndownChart({originX, originY}) {
  return (
    <svg>
      {mapWithIndex(
        (
          [
            plannedResolved,
            plannedRemaining,
            unplannedResolved,
            unplannedRemaining,
          ],
          index,
        ) => {
          const x = originX + index * 25;
          const presProps = {
            x,
            y: originY,
            height: plannedResolved * barHeightMultiplier,
            fill: colors.resolved,
          };
          const premProps = {
            x,
            y: originY + plannedResolved * barHeightMultiplier,
            height: plannedRemaining * barHeightMultiplier,
            fill: colors.planned,
          };
          const upresProps = {
            x,
            y:
              originY +
              (plannedResolved + plannedRemaining) * barHeightMultiplier,
            height: unplannedResolved * barHeightMultiplier,
            fill: colors.unplannedResolved,
          };
          const upremProps = {
            x,
            y:
              originY +
              (plannedResolved + plannedRemaining + unplannedResolved) *
                barHeightMultiplier,
            height: unplannedRemaining * barHeightMultiplier,
            fill: colors.unplannedRemaining,
          };
          return (
            <g key={index}>
              <Bar {...presProps} />
              <Bar {...premProps} />
              <Bar {...upresProps} />
              <Bar {...upremProps} />
            </g>
          );
        },
        data,
      )}
    </svg>
  );
}
