import {isEmpty} from "ramda";
import {addIndex, map} from "ramda";
import {useSelector} from "react-redux";
import {colors} from "../global/constants";
import {getByItem} from "../global/selectors";
import {AddForm} from "../tickets/AddForm";
import {SelectionIndicator} from "../global/SelectionIndicator";
import {getItemsByParentAndGoal} from "../tickets/selectors";

const mapWithIndex = addIndex(map);

function Ticket({model, id, originX, originY, offset, width, isCurrent, i}) {
  const {label} = useSelector(getByItem({model, id}));

  return (
    <svg
      key={`itemdetail_${model}_${id}`}
      x={originX + offset}
      y={originY + i * 65}
    >
      {isCurrent && <SelectionIndicator width={width + 20} />}
      <rect x={10} y={10} width={200} height={10} fill={colors.PLANNED} />
      <rect x={10} y={22} width={200} height={10} fill={colors.ACTIVE} />
      <foreignObject x={10} y={36} width={width} height={60}>
        <span>{label}</span>
      </foreignObject>
    </svg>
  );
}

export function BreakdownItem({
  isCurrent,
  item,
  goal,
  offset,
  originX,
  originY,
}) {
  const items = useSelector(getItemsByParentAndGoal(item, goal));
  const showAddForm = isEmpty(items);

  const width = 200;

  return (
    <>
      {mapWithIndex(
        ({model, id}, i) => (
          <Ticket
            key={`${model}_${id}`}
            model={model}
            id={id}
            originX={originX}
            originY={originY}
            offset={offset}
            width={width}
            isCurrent={isCurrent}
            i={i}
          />
        ),
        items,
      )}
      {showAddForm && (
        <foreignObject
          x={originX + offset + 70}
          y={originY + 10}
          width={width}
          height={60}
        >
          <AddForm parentId={item} goalId={goal} />
        </foreignObject>
      )}
    </>
  );
}
