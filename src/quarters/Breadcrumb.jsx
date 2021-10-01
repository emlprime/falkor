import {useSelector} from "react-redux";
import {List as ListForAncestry} from "./List";
import {Bracket} from "../global/Bracket";
import {ProgressChart} from "../global/ProgressChart";
import {
  baseProgressRadius,
  progressWidth,
  knownStatuses as ks,
} from "../global/constants";
import {knownAncestrySelectors as kas} from "../global/knownAncestrySelectors";
// import {Breadcrumb as BreadcrumbReleases} from "../releases/Breadcrumb";
import {useSetCurrentAncestryByStatus} from "./hooks";

// const {equals} = R;
const values = [
  [ks.RESOLVED, [0, 50]],
  [ks.ACTIVE, [50, 75]],
  [ks.PLANNED, [75, 100]],
];

export const Breadcrumb = ({originX, originY, parentKey}) => {
    console.log(`parentKey:`, parentKey)
  const ancestry = useSelector(kas.quarters([parentKey]));
  console.log(`ancestry:`, ancestry);
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
// {!isCurrentModel && (
//   <BreadcrumbReleases originX={originX} originY={originY} />
// )}
