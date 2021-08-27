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
    originX: originX + 3.7 * ringGap,
    originY: originY + baseProgressRadius + 4 * ringGap,
    breakoffHeight: -40,
    breakoffWidth: 60,
    breakoffSplit: 50,
    bottomAngleHeight: 65,
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
