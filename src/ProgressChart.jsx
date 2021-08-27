import * as R from "ramda";
import {ArcNemesis} from "./ArcNemesis";

const {map} = R;

export const ProgressChart = ({handleClick, radius, values, ...rest}) => {
  return map(
    ([status, [startPercent, endPercent]]) => (
      <ArcNemesis
        key={status}
        radius={radius}
        status={status}
        startPercent={startPercent}
        endPercent={endPercent}
        handleClick={handleClick}
        {...rest}
      />
    ),
    values,
  );
};
