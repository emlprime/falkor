import {ProgressChart} from "./ProgressChart";
import {BreadcrumbRelease} from "./BreadcrumbRelease";
import {Bracket} from "./Bracket";
import {QuarterList} from "./QuarterList";
import {baseProgressRadius, progressWidth} from "./constants";

const values = [
  ["resolved", [0, 50]],
  ["active", [50, 75]],
  ["planned", [75, 99.9]],
];

export const BreadcrumbQuarter = ({originX, originY}) => {
  const handleClick = value => {
    console.log("Quarter value:", value);
  };

  const bracketConfig = {
    Component: QuarterList,
    originX,
    originY: originY - (baseProgressRadius + progressWidth / 2),
    breakoffHeight: 70,
    breakoffWidth: 40,
    breakoffSplit: 320,
    bottomAngleHeight: 100,
  };

  return (
    <>
      <BreadcrumbRelease originX={originX} originY={originY} />
      <ProgressChart
        originX={originX}
        originY={originY}
        radius={baseProgressRadius}
        values={values}
        handleClick={handleClick}
        width={progressWidth}
      />
      <Bracket {...bracketConfig} />
    </>
  );
};
