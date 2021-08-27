import {ProgressChart} from "./ProgressChart";
import {BreadcrumbRelease} from "./BreadcrumbRelease";
import {Bracket} from "./Bracket";

const values = [
  ["resolved", [0, 50]],
  ["active", [50, 75]],
  ["planned", [75, 99.9]],
];

export const BreadcrumbQuarter = () => {
  const handleClick = value => {
    console.log("Quarter value:", value);
  };

  const size = 600;
  const bracketConfig = {
    originX: 300,
    originY: 130,
    breakoffHeight: 70,
    breakoffWidth: 400,
    bottomAngleHeight: 100,
  };

  return (
    <>
      <BreadcrumbRelease />
      <ProgressChart
        key="breadcrumb_goals"
        center={size / 2}
        radius={115 + 40}
        values={values}
        handleClick={handleClick}
        size="huge"
      />
      <Bracket {...bracketConfig} />
    </>
  );
};
