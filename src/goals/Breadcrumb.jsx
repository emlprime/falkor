import {ProgressChart} from "../global/ProgressChart";
import {baseProgressRadius, progressWidth, ringGap} from "../global/constants";
import {useSetCurrentScope} from "../global/hooks";

const values = [
  ["resolved", [0, 50]],
  ["active", [50, 51]],
  ["planned", [51, 53]],
];

export const Breadcrumb = ({originX, originY}) => {
  const handleClick = useSetCurrentScope("goals");

  return (
    <>
      <ProgressChart
        originX={originX}
        originY={originY}
        radius={baseProgressRadius + 6 * ringGap}
        values={values}
        handleClick={handleClick}
        width={progressWidth}
      />
    </>
  );
};
