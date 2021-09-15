import * as R from "ramda";
import {NAME} from "./constants";
import {useSelector} from "react-redux";
import {ProgressChart} from "../global/ProgressChart";
import {Bracket} from "../global/Bracket";
import {Breadcrumb as BreadcrumbSprints} from "../sprints/Breadcrumb";
import {List} from "./List";
import {baseProgressRadius, progressWidth, ringGap} from "../global/constants";
import {useSetCurrentItemByModel} from "../global/hooks";
import {getCurrentModel} from "../global/selectors";

const {equals} = R;

const values = [
  ["resolved", [0, 50]],
  ["active", [50, 56.26]],
  ["planned", [56.25, 75]],
];

export const Breadcrumb = ({originX, originY}) => {
  const handleClick = useSetCurrentItemByModel("releases");

  const currentModel = useSelector(getCurrentModel);
  const isCurrentModel = equals(NAME, currentModel);

  const bracketConfig = {
    Component: List,
    originX: originX + baseProgressRadius + progressWidth + ringGap * 1.2,
    originY: 300,
    breakoffHeight: 10,
    breakoffWidth: 20,
    breakoffSplit: 120,
    bottomAngleHeight: 135,
  };
  return (
    <>
      {!isCurrentModel && (
        <BreadcrumbSprints originX={originX} originY={originY} />
      )}
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
