import {useCallback} from "react";
import * as R from "ramda";
import {ArcNemesis} from "./ArcNemesis";

const {map, prop} = R;

export const ProgressChart = ({
  handleClickByStatus,
  radius,
  values: statuses,
  ...rest
}) => {
  return map(([status, [startPercent, endPercent]]) => {
    console.log(`status:`, status);
    const callback = prop(status, handleClickByStatus);
    console.log(`callback:`, callback, handleClickByStatus);
    return (
      <ArcNemesis
        key={status}
        radius={radius}
        status={status}
        startPercent={startPercent}
        endPercent={endPercent}
        handleClick={useCallback(prop(status, handleClickByStatus), [
          status,
          handleClickByStatus,
        ])}
        {...rest}
      />
    );
  }, statuses);
};
