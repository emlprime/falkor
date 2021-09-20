// import {useCallback, useState} from "react";
import * as R from "ramda";
import {
  useSelector,
  //    useDispatch
} from "react-redux";
// import styled from "styled-components";
// import {colors} from "../global/constants";
import {
  getCurrentItem,
  getCurrentGoal,
  getByItem,
  //  getGoalsByItem,
} from "../global/selectors";
import {getByParentKey as getQuartersByParentKey} from "../quarters/selectors";
import {getByParentKey as getReleasesByParentKey} from "../releases/selectors";
import {getItemsByParent} from "../goals/selectors";
import {getItemsByParentAndGoal} from "../tickets/selectors";
// import {add as addDay} from "../days/actions";

const {
  // add,
  prop,
} = R;

// const scopeLength = 4;
// const AddButton = ({
//   offset,
//   itemWidth,
//   gap,
//   originX,
//   originY,
//   scope,
//   parentId,
// }) => {
//   const [label, setLabel] = useState("");
//   const dispatch = useDispatch();
//   const addAction = prop(scope, addDay);
//   const onClick = useCallback(() => {
//     dispatch(addAction({scope, parentId, label}));
//   }, [dispatch, scope, parentId, label]);
//   const xOffset = offset * (itemWidth + gap);

//   return (
//     <foreignObject
//       width={200}
//       height={100}
//       x={add(originX, xOffset)}
//       y={originY + 40}
//     >
//       <Article>
//         <textarea
//           type="text"
//           id="add"
//           name="label"
//           value={label}
//           onChange={e => setLabel(e.target.value)}
//         />
//         <div>
//           <button onClick={onClick}>Add</button>
//         </div>
//       </Article>
//     </foreignObject>
//   );
// };

const swimlanes = [
  [["resolved", [0, 40]], ["active", [40, 60]], ["planned", [60, 99.9]]],
  [["resolved", [0, 40]], ["active", [40, 60]], ["planned", [60, 99.9]]],
  [["resolved", [0, 20]], ["active", [20, 60]], ["planned", [60, 99.9]]],
  [["resolved", [0, 40]], ["active", [40, 60]], ["planned", [60, 99.9]]],
];

const selectorsByModel = {
  projects: getQuartersByParentKey,
  quarters: getReleasesByParentKey,
};

export const useChosenFocus = () => {
  const item = useSelector(getCurrentItem);
  const {model} = item;
  console.log(`model:`, model);

  const goal = useSelector(getCurrentGoal);
  const childrenSelector = prop(model, selectorsByModel);
  const columns = useSelector(childrenSelector(item));

  // get the label for the current item
  const {label} = useSelector(getByItem(item));

  const rows = useSelector(getItemsByParent(item));

  const breakdown = useSelector(getItemsByParentAndGoal(item, goal));

  // select the length of the records to determine
  // if there's space for an add button

  // const records = map(recordId => [recordId, 1], recordIds);
  // const recordLength = sum(map(last, records));
  // const canAdd = gt(scopeLength, recordLength);
  // const AddActionButton = canAdd
  //   ? props => (
  //       <AddButton
  //         {...props}
  //         scope={currentScope}
  //         parentId={currentId}
  //         offset={recordLength}
  //       />
  //     )
  //   : null;

    return {label, rows, columns, breakdown, swimlanes};
};

// const Article = styled.article`
//   textarea,
//   button {
//     background: transparent;
//     border: 1px solid ${colors.planned};
//     color: ${colors.planned};
//   }
// `;
