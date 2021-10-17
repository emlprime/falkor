import {useCallback, useMemo} from "react";
import {addIndex, isEmpty, map} from "ramda";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {colors} from "../global/constants";
import {getByItem, getIsCurrentItem} from "../global/selectors";
import {AddForm} from "../tickets/AddForm";
import {getItemsByParentAndGoal} from "../tickets/selectors";
import {BreakdownHeader} from "./BreakdownHeader";
import {CurrentActions} from "./CurrentActions";
import {setCurrentTicket} from "../global/actions";

const mapWithIndex = addIndex(map);

function Ticket({model, id, originX, originY, offset, width, i}) {
  const dispatch = useDispatch();
  const {label} = useSelector(getByItem({model, id}));
  const onClick = useCallback(() => {
    dispatch(setCurrentTicket({model, id}));
  }, [dispatch]);

  return (
    <svg
      key={`itemdetail_${model}_${id}`}
      x={originX + offset}
      y={originY + i * 65}
    >
      <rect x={10} y={10} width={200} height={10} fill={colors.PLANNED} />
      <rect x={10} y={22} width={200} height={10} fill={colors.ACTIVE} />
      <foreignObject x={10} y={36} width={width} height={60}>
        <Button onClick={onClick}>{label}</Button>
      </foreignObject>
    </svg>
  );
}

const Button = styled.button`
  background-color: transparent;
  color: ${colors.PLANNED};
  border: none;
`;

export function BreakdownItem({item, goal, offset, originX, originY}) {
  const items = useSelector(getItemsByParentAndGoal(item, goal));
  const isCurrent = useSelector(getIsCurrentItem(item));
  console.log(`isCurrent:`, isCurrent);

  const showAddForm = isEmpty(items);

  const width = 200;
  const childOriginX = useMemo(() => originX + (width + 10) * offset);

  return (
    <>
      {isCurrent && (
        <CurrentActions originX={childOriginX + width} originY={originY - 50} />
      )}
      <BreakdownHeader
        item={item}
        offset={offset}
        originX={childOriginX}
        originY={originY}
      />
      {mapWithIndex(
        ({model, id}, i) => (
          <Ticket
            key={`${model}_${id}`}
            model={model}
            id={id}
            originX={childOriginX - width / 2}
            originY={originY + 50}
            offset={i + 100}
            width={width}
            i={i}
          />
        ),
        items,
      )}
      {showAddForm && (
        <foreignObject
          x={childOriginX + 40}
          y={originY + 40}
          width={width}
          height={60}
        >
          <AddForm parentId={item} goalId={goal} />
        </foreignObject>
      )}
    </>
  );
}
