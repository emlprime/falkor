import * as R from "ramda";
import {NAME} from "./constants";
import {List} from "./List";
import {useSelector} from "react-redux";
import {Bracket} from "../global/Bracket";
import {ProgressChart} from "../global/ProgressChart";
import {baseProgressRadius, progressWidth} from "../global/constants";
import {Breadcrumb as BreadcrumbReleases} from "../releases/Breadcrumb";
import {useSetCurrentItemByModel} from "../global/hooks";
import {getCurrentModel} from "../global/selectors";

const {equals} = R;
const values = [
  ["resolved", [0, 50]],
  ["active", [50, 75]],
  ["planned", [75, 99.9]],
];

export const Breadcrumb = ({originX, originY}) => {
  const handleClick = useSetCurrentItemByModel(NAME);

  const currentModel = useSelector(getCurrentModel);
  const isCurrentScope = equals(NAME, currentModel);

  const bracketConfig = {
    Component: List,
    originX,
    originY: originY - (baseProgressRadius + progressWidth / 2),
    breakoffHeight: 70,
    breakoffWidth: 40,
    breakoffSplit: 400,
    bottomAngleHeight: 135,
  };

  return (
    <>
      {!isCurrentScope && (
        <BreadcrumbReleases originX={originX} originY={originY} />
      )}
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
