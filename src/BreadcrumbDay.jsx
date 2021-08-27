import {ProgressChart} from "./ProgressChart";

const values = [
  ["resolved", [0, 50]],
  ["active", [50, 51]],
  ["planned", [51, 53]],
];

export const BreadcrumbDay = () => {
  const handleClick = value => {
    console.log("Day value:", value);
  };

  const size = 600;
  return (
    <>
      <ProgressChart
        center={size / 2}
        radius={115 + 4 * 40}
        values={values}
        handleClick={handleClick}
        size="huge"
      />
    </>
  );
};
