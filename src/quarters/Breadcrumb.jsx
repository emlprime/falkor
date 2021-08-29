import {List} from "./List";
import {Bracket} from "../global/Bracket";
import {ProgressChart} from "../global/ProgressChart";
import {baseProgressRadius, progressWidth} from "../global/constants";
import {Breadcrumb as BreadcrumbReleases} from "../releases/Breadcrumb";
import {useSetCurrentScope} from "../global/hooks";

const values = [
  ["resolved", [0, 50]],
  ["active", [50, 75]],
  ["planned", [75, 99.9]],
];

export const Breadcrumb = ({originX, originY}) => {
  const handleClick = useSetCurrentScope("quarters");

  const bracketConfig = {
    Component: List,
    originX,
    originY: originY - (baseProgressRadius + progressWidth / 2),
    breakoffHeight: 70,
    breakoffWidth: 40,
    breakoffSplit: 320,
    bottomAngleHeight: 65,
  };

  return (
    <>
      <BreadcrumbReleases originX={originX} originY={originY} />
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
