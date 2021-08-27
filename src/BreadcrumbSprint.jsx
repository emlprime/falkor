import {ProgressChart} from "./ProgressChart";
import {Bracket} from "./Bracket";
import {BreadcrumbDay} from "./BreadcrumbDay";
import {SprintList} from "./SprintList";

const values = [
  ["resolved", [0, 50]],
  ["active", [50, 53]],
  ["planned", [53, 56.25]],
];

export const BreadcrumbSprint = () => {
  const handleClick = value => {
    console.log("Day value:", value);
  };

  const size = 600;
  const bracketConfig = {
    Component: SprintList,
    originX: 395,
    originY: 530,
    breakoffHeight: 70,
    breakoffWidth: 100,
    breakoffSplit: 50,
    bottomAngleHeight: 100,
  };
  return (
    <>
      <BreadcrumbDay />
      <ProgressChart
        center={size / 2}
        radius={115 + 3 * 40}
        values={values}
        handleClick={handleClick}
        size="huge"
      />
      <Bracket {...bracketConfig} />
    </>
  );
};
