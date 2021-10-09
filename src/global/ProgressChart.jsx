import {map} from "ramda";
import {ArcNemesis} from "./ArcNemesis";

export const ProgressChart = ({
  handleClickByStatus = {},
  radius,
  values: statuses,
  ...rest
}) => {
  return map(([status, [startPercent, endPercent]]) => {
    return (
      <ArcNemesis
        key={status}
        radius={radius}
        status={status}
        startPercent={startPercent}
        endPercent={endPercent}
        handleClickByStatus={handleClickByStatus}
        {...rest}
      />
    );
  }, statuses);
};
