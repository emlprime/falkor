import {ProgressChart} from "../global/ProgressChart";
import {baseProgressRadius, progressWidth, ringGap} from "../global/constants";
import {useSetCurrentItemByModel} from "../global/hooks";

const values = [
  ["resolved", [0, 50]],
  ["active", [50, 51]],
  ["planned", [51, 53]],
];

export const Breadcrumb = ({originX, originY}) => {
  const handleClick = useSetCurrentItemByModel("goals");

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
