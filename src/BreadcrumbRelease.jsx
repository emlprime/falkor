import {ProgressChart} from "./ProgressChart";
import {Bracket} from "./Bracket";
import {BreadcrumbSprint} from "./BreadcrumbSprint";

const values = [
  ["resolved", [0, 50]],
  ["active", [50, 56.26]],
  ["planned", [56.25, 75]],
];

export const BreadcrumbRelease = () => {
  const handleClick = value => {
    console.log("value:", value);
  };

  const size = 600;
  const bracketConfig = {
    originX: 510,
    originY: 300,
    breakoffHeight: 70,
    breakoffWidth: 40,
    breakoffSplit: 100,
    bottomAngleHeight: 100,
  };
  return (
    <>
      <BreadcrumbSprint />
      <ProgressChart
        key="breadcrumb_goals"
        center={size / 2}
        radius={115 + 2 * 40}
        values={values}
        handleClick={handleClick}
        size="huge"
      />
      <Bracket {...bracketConfig} />
    </>
  );
};
