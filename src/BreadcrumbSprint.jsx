import {ProgressChart} from "./ProgressChart";
import {Bracket} from "./Bracket";
import {BreadcrumbDay} from "./BreadcrumbDay";
import {SprintList} from "./SprintList";
import {baseProgressRadius, progressWidth, ringGap} from "./constants";

const values = [
  ["resolved", [0, 50]],
  ["active", [50, 53]],
  ["planned", [53, 56.25]],
];

export const BreadcrumbSprint = ({originX, originY}) => {
  const handleClick = value => {
    console.log("Day value:", value);
  };

  const bracketConfig = {
    Component: SprintList,
    originX,
    originY,
    breakoffHeight: 70,
    breakoffWidth: 100,
    breakoffSplit: 50,
    bottomAngleHeight: 100,
  };
  return (
    <>
      <BreadcrumbDay originX={originX} originY={originY} />
      <ProgressChart
        originX={originX}
        originY={originY}
        radius={baseProgressRadius + 4 * ringGap}
        values={values}
        handleClick={handleClick}
        width={progressWidth}
      />
      <Bracket {...bracketConfig} />
    </>
  );
};
