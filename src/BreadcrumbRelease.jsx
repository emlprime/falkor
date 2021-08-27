import {ProgressChart} from "./ProgressChart";
import {Bracket} from "./Bracket";
import {BreadcrumbSprint} from "./BreadcrumbSprint";
import {ReleaseList} from "./ReleaseList";
import {baseProgressRadius, progressWidth, ringGap} from "./constants";

const values = [
  ["resolved", [0, 50]],
  ["active", [50, 56.26]],
  ["planned", [56.25, 75]],
];

export const BreadcrumbRelease = ({originX, originY}) => {
  const handleClick = value => {
    console.log("value:", value);
  };

  const bracketConfig = {
    Component: ReleaseList,
    originX: originX + baseProgressRadius + progressWidth + ringGap * 1.2,
    originY: 300,
    breakoffHeight: 30,
    breakoffWidth: 20,
    breakoffSplit: 50,
    bottomAngleHeight: 65,
  };
  return (
    <>
      <BreadcrumbSprint originX={originX} originY={originY} />
      <ProgressChart
        key="breadcrumb_goals"
        originX={originX}
        originY={originY}
        radius={baseProgressRadius + 2 * ringGap}
        values={values}
        handleClick={handleClick}
        width={progressWidth}
      />
      <Bracket {...bracketConfig} />
    </>
  );
};
