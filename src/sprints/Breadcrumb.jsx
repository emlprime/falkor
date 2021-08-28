import {ProgressChart} from "../global/ProgressChart";
import {Bracket} from "../global/Bracket";
import {Breadcrumb as BreadcrumbDays} from "../days/Breadcrumb";
import {List} from "./List";
import {baseProgressRadius, progressWidth, ringGap} from "../global/constants";

const values = [
  ["resolved", [0, 50]],
  ["active", [50, 53]],
  ["planned", [53, 56.25]],
];

export const Breadcrumb = ({originX, originY}) => {
  const handleClick = value => {
    console.log("Sprint Value:", value);
  };

  const bracketConfig = {
    Component: List,
    originX: originX + 3.7 * ringGap,
    originY: originY + baseProgressRadius + 4 * ringGap,
    breakoffHeight: -40,
    breakoffWidth: 60,
    breakoffSplit: 50,
    bottomAngleHeight: 65,
  };
  return (
    <>
      <BreadcrumbDays originX={originX} originY={originY} />
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
