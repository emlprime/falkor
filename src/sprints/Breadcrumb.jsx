import * as R from "ramda";
import {NAME} from "./constants";
import {useSelector} from "react-redux";
import {ProgressChart} from "../global/ProgressChart";
import {Bracket} from "../global/Bracket";
import {Breadcrumb as BreadcrumbGoals} from "../goals/Breadcrumb";
import {List} from "./List";
import {baseProgressRadius, progressWidth, ringGap} from "../global/constants";
import {useSetCurrentItemByModel} from "../global/hooks";
import {getCurrentModel} from "../global/selectors";

const {equals} = R;

const values = [
  ["resolved", [0, 50]],
  ["active", [50, 53]],
  ["planned", [53, 56.25]],
];

export const Breadcrumb = ({originX, originY}) => {
  const handleClick = useSetCurrentItemByModel("sprints");

  const currentModel = useSelector(getCurrentModel);
  const isCurrentModel = equals(NAME, currentModel);

  const bracketConfig = {
    Component: List,
    originX: originX + 3.7 * ringGap,
    originY: originY + baseProgressRadius + 4 * ringGap,
    breakoffHeight: -40,
    breakoffWidth: 60,
    breakoffSplit: 50,
    bottomAngleHeight: 100,
  };
  return (
    <>
      {!isCurrentModel && (
        <BreadcrumbGoals originX={originX} originY={originY} />
      )}
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
