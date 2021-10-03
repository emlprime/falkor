import {NAME} from "./constants";
import {useSelector} from "react-redux";
import {List as ListForAncestry} from "./List";
import {Bracket} from "../global/Bracket";
import {ProgressChart} from "../global/ProgressChart";
import {baseProgressRadius, progressWidth, ringGap} from "../global/constants";
import {getCurrentAncestry} from "../global/selectors";
import {clipAncestry} from "../global/utils";
import {useSetCurrentAncestryByStatus} from "./hooks";

const values = [
  ["resolved", [0, 50]],
  ["active", [50, 56.26]],
  ["planned", [56.25, 75]],
];

export const Breadcrumb = ({originX, originY}) => {
  const currentAncestry = useSelector(getCurrentAncestry);
  const ancestry = clipAncestry(NAME, currentAncestry);

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
      <ProgressChart
        originX={originX}
        originY={originY}
        radius={baseProgressRadius + 2 * ringGap}
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
