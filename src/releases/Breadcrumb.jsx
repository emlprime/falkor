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
import {Breadcrumb as BreadcrumbSprints} from "../sprints/Breadcrumb";

const values = [
  [ks.RESOLVED, [0, 50]],
  [ks.ACTIVE, [50, 56.26]],
  [ks.PLANNED, [56.25, 75]],
];

export const Breadcrumb = ({originX, originY}) => {
  const currentAncestry = useSelector(getCurrentAncestry);
  const ancestry = clipAncestry(NAME, currentAncestry);
  const parentKey = last(ancestry);
  const isTerminus = useSelector(getIsTerminus(parentKey));

  const handleClickByStatus = useSetCurrentAncestryByStatus(ancestry);

  const bracketConfig = {
    originX: originX + baseProgressRadius + progressWidth + ringGap * 1.2,
    originY: 300,
    breakoffHeight: 10,
    breakoffWidth: 20,
    breakoffSplit: 120,
    bottomAngleHeight: 135,
  };
  const List = ListForAncestry(ancestry);

  return (
    <>
      {!isTerminus && <BreadcrumbSprints originX={originX} originY={originY} />}
      <ProgressChart
        originX={originX}
        originY={originY}
        radius={baseProgressRadius + 2 * ringGap}
        values={values}
        handleClickByStatus={handleClickByStatus}
        width={progressWidth}
      />
      <Bracket {...bracketConfig}>
        <List ancestry={ancestry} />
      </Bracket>
    </>
  );
};
