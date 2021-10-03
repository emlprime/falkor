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
import {getCurrentAncestry} from "../global/selectors";
import {clipAncestry} from "../global/utils";
import {useSetCurrentAncestryByStatus} from "./hooks";

const values = [
  [ks.RESOLVED, [0, 50]],
  [ks.ACTIVE, [50, 51]],
  [ks.PLANNED, [51, 53]],
];

export const Breadcrumb = ({originX, originY}) => {
  const currentAncestry = useSelector(getCurrentAncestry);
  const ancestry = clipAncestry(NAME, currentAncestry);

  const handleClickByStatus = useSetCurrentAncestryByStatus(ancestry);

  const bracketConfig = {
    originX: originX + 5,
    originY: 300 + baseProgressRadius * 2 + 33,
    breakoffHeight: -20,
    breakoffWidth: 10,
    breakoffSplit: 40,
    bottomAngleHeight: 135,
  };
  const List = ListForAncestry(ancestry);

  return (
    <>
      <ProgressChart
        originX={originX}
        originY={originY}
        radius={baseProgressRadius + 6 * ringGap}
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
