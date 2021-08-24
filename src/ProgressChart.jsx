import * as R from "ramda";
import { ArcSmall, ArcBig } from "./ArcNemesis";

const { map, equals } = R;

/* const mQId = (id) => ({ model: "quarters", id });
 * const mRId = (id) => ({ model: "releases", id });
 * const mSId = (id) => ({ model: "sprints", id });
 * const quartersAllIds = map(mQId, ["2021-Q3", "2021-Q4", "2022-Q1", "2022-Q2"]);
 * const releasesAllIds = map(mRId, ["R157", "R158", "R159", "R160"]);
 * const sprintsAllIds = map(mSId, ["Week1", "Week2", "Week3"]);
 *  */
export const ProgressChart = ({ handleClick, radius, values, size = "big" }) => {
  const Arc = equals("big", size) ? ArcBig : ArcSmall;
  return map(
    ([status, [startPercent, endPercent]]) => (
      <Arc
        key={status}
        radius={radius}
        status={status}
        startPercent={startPercent}
        endPercent={endPercent}
        onClick={handleClick}
      />
    ),
    values
  );
};
