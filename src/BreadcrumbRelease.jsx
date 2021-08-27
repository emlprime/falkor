import {ProgressChart} from "./ProgressChart";

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
  return (
    <ProgressChart
      key="breadcrumb_goals"
      center={size / 2}
      radius={115 + 2 * 40}
      values={values}
      handleClick={handleClick}
      size="huge"
    />
  );
};
