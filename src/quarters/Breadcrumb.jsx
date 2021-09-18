import {List as ListForAncestry} from "./List";
import {Bracket} from "../global/Bracket";
import {ProgressChart} from "../global/ProgressChart";
import {baseProgressRadius, progressWidth} from "../global/constants";
// import {Breadcrumb as BreadcrumbReleases} from "../releases/Breadcrumb";
import {useSetCurrentAncestryByStatus} from "./hooks";

// const {equals} = R;
const values = [
  ["resolved", [0, 50]],
  ["active", [50, 75]],
  ["planned", [75, 100]],
];

export const Breadcrumb = ({originX, originY, parentKey}) => {
  const ancestry = [parentKey];
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
