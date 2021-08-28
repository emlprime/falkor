import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {List} from "./List";
import global from "../global";
import {ProgressChart} from "../global/ProgressChart";
import {baseProgressRadius, progressWidth} from "../global/constants";
import {Breadcrumb as BreadcrumbReleases} from "../releases/Breadcrumb";

const {
  components: {
    default: {Bracket},
  },
  actions: a,
} = global;

const values = [
  ["resolved", [0, 50]],
  ["active", [50, 75]],
  ["planned", [75, 99.9]],
];

export const Breadcrumb = ({originX, originY}) => {
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch(a.setCurrentScope("quarter"));
  }, [dispatch]);

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
