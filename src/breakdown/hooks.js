import {useCallback, useState} from "react";
import {colors} from "../global/constants";
import * as R from "ramda";
import {useSelector, useDispatch} from "react-redux";
import {
  getCurrentItem,
  // getCurrentGoal,
  getByItem,
  // getGoalsByItem,
} from "../global/selectors";
import {add as addDay} from "../days/actions";
import styled from "styled-components";

const {add, prop} = R;

const scopeLength = 4;
const AddButton = ({
  offset,
  itemWidth,
  gap,
  originX,
  originY,
  scope,
  parentId,
}) => {
  const [label, setLabel] = useState("");
  const dispatch = useDispatch();
  const addAction = prop(scope, addDay);
  const onClick = useCallback(() => {
    dispatch(addAction({scope, parentId, label}));
  }, [dispatch, scope, parentId, label]);
  const xOffset = offset * (itemWidth + gap);

  return (
    <foreignObject
      width={200}
      height={100}
      x={add(originX, xOffset)}
      y={originY + 40}
    >
      <Article>
        <textarea
          type="text"
          id="add"
          name="label"
          value={label}
          onChange={e => setLabel(e.target.value)}
        />
        <div>
          <button onClick={onClick}>Add</button>
        </div>
      </Article>
    </foreignObject>
  );
};

export const useGetCurrentChildren = () => {
  // get the current item
  const item = useSelector(getCurrentItem);
  // const goal = useSelector(getCurrentGoal);

  // get the label for the current item
  const {label} = useSelector(getByItem(item));

  //   const getGoals = useSelector(getGoalsByItem(item));
  //   const recordIds = useSelector(getChildrenByItemAndGoal(item, goal));
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
  // console.log(`currentScope:`, currentScope);
  return {label};
};

const Article = styled.article`
  textarea,
  button {
    background: transparent;
    border: 1px solid ${colors.planned};
    color: ${colors.planned};
  }
`;
