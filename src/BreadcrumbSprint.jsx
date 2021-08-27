import {ProgressChart} from "./ProgressChart";
import {Bracket} from "./Bracket";

const values = [
  ["resolved", [0, 50]],
  ["active", [50, 53]],
  ["planned", [53, 56.25]],
];

export const BreadcrumbSprint = () => {
  const handleClick = value => {
    console.log("Sprint value:", value);
  };

  const size = 600;
  const bracketConfig = {
    originX: 470,
    originY: 500,
    breakoffHeight: 70,
    breakoffWidth: 100,
    bottomAngleHeight: 100,
  };
  return (
    <>
      <ProgressChart
        key="breadcrumb_goals"
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
