import {useDispatch} from "react-redux";
import {ProgressChart} from "../global/ProgressChart";
import {Bracket} from "../global/Bracket";
import global from "../global";
import {Breadcrumb as BreadcrumbSprints} from "../sprints/Breadcrumb";
import {List} from "./List";
import {baseProgressRadius, progressWidth, ringGap} from "../global/constants";

const {actions: a} = global;
const values = [
  ["resolved", [0, 50]],
  ["active", [50, 56.26]],
  ["planned", [56.25, 75]],
];

export const Breadcrumb = ({originX, originY}) => {
  const dispatch = useDispatch();
    const handleClick = () => {
    dispatch(a.setCurrentScope("releases"));
  };

  const bracketConfig = {
    Component: List,
    originX: originX + baseProgressRadius + progressWidth + ringGap * 1.2,
    originY: 300,
    breakoffHeight: 30,
    breakoffWidth: 20,
    breakoffSplit: 50,
    bottomAngleHeight: 65,
  };
  return (
    <>
      <BreadcrumbSprints originX={originX} originY={originY} />
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
