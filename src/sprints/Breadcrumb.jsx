import {last} from "ramda";
import {NAME} from "./constants";
import {useSelector} from "react-redux";
import {List as ListForAncestry} from "./List";
import {Bracket} from "../global/Bracket";
import {ProgressChart} from "../global/ProgressChart";
import {
  baseProgressRadius,
  progressWidth,
  ringGap,
  knownStatuses as ks,
} from "../global/constants";
import {getCurrentAncestry, getIsTerminus} from "../global/selectors";
import {clipAncestry} from "../global/utils";
import {useSetCurrentAncestryByStatus} from "./hooks";
import {Breadcrumb as BreadcrumbDays} from "../days/Breadcrumb";

const values = [
  [ks.RESOLVED, [0, 50]],
  [ks.ACTIVE, [50, 53]],
  [ks.PLANNED, [53, 56.25]],
];

export const Breadcrumb = ({originX, originY}) => {
  const currentAncestry = useSelector(getCurrentAncestry);
  const ancestry = clipAncestry(NAME, currentAncestry);
  const parentId = last(ancestry);
  const isTerminus = useSelector(getIsTerminus(parentId));

  const handleClickByStatus = useSetCurrentAncestryByStatus(ancestry);

  const bracketConfig = {
    originX: originX + 3.7 + ringGap + 13,
    originY: 300 + baseProgressRadius + 4 * ringGap + 13,
    breakoffHeight: 20,
    breakoffWidth: 130,
    breakoffSplit: 50,
    bottomAngleHeight: 100,
  };
  const List = ListForAncestry(ancestry);

  return (
    <>
      {!isTerminus && <BreadcrumbDays originX={originX} originY={originY} />}
      <ProgressChart
        originX={originX}
        originY={originY}
        radius={baseProgressRadius + 4 * ringGap}
        values={values}
        handleClick={handleClickByStatus}
        width={progressWidth}
      />
      <Bracket {...bracketConfig}>
        <List ancestry={ancestry} />
      </Bracket>
    </>
  );
};
