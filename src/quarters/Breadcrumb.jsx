import {last} from "ramda";
import {NAME} from "./constants";
import {useSelector} from "react-redux";
import {List as ListForAncestry} from "./List";
import {Bracket} from "../global/Bracket";
import {clipAncestry} from "../global/utils";
import {ProgressChart} from "../global/ProgressChart";
import {
  baseProgressRadius,
  progressWidth,
  knownStatuses as ks,
} from "../global/constants";
import {getCurrentAncestry, getIsTerminus} from "../global/selectors";
import {Breadcrumb as BreadcrumbReleases} from "../releases/Breadcrumb";
import {useSetCurrentAncestryByStatus} from "./hooks";

const values = [
  [ks.RESOLVED, [0, 50]],
  [ks.ACTIVE, [50, 75]],
  [ks.PLANNED, [75, 100]],
];

export const Breadcrumb = ({originX, originY}) => {
  const currentAncestry = useSelector(getCurrentAncestry);
  const ancestry = clipAncestry(NAME, currentAncestry);
  const parentKey = last(ancestry);
  const isTerminus = useSelector(getIsTerminus(parentKey));
  const handleClickByStatus = useSetCurrentAncestryByStatus(ancestry);

  const bracketConfig = {
    originX,
    originY: originY - (baseProgressRadius + progressWidth / 2),
    breakoffHeight: 70,
    breakoffWidth: 40,
    breakoffSplit: 400,
    bottomAngleHeight: 135,
  };
  const List = ListForAncestry(ancestry);

  return (
    <>
      {!isTerminus && (
        <BreadcrumbReleases originX={originX} originY={originY} />
      )}
      <ProgressChart
        originX={originX}
        originY={originY}
        radius={baseProgressRadius}
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
