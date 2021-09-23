import {map} from "ramda";
import {useSelector} from "react-redux";
import {colors} from "../global/constants";
import {getByItem} from "../global/selectors";
import {SelectionIndicator} from "../global/SelectionIndicator";
import {getItemsByParentAndGoal} from "../tickets/selectors";

export function BreakdownItem({
  isCurrent,
  item,
  goal,
  offset,
  originX,
  originY,
}) {
  const items = useSelector(getItemsByParentAndGoal(item, goal));
  console.log(`items:`, items);

  const width = 200;
  return (
    <>
      {map(({model, id}) => {
        const {label} = useSelector(getByItem({model, id}));

        return (
                <svg key={`itemdetail_${model}_${id}`} x={originX + offset} y={originY}>
            {isCurrent && <SelectionIndicator width={width + 20} />}
            <rect x={10} y={10} width={200} height={10} fill={colors.planned} />
            <rect x={10} y={22} width={200} height={10} fill={colors.active} />
            <foreignObject x={10} y={36} width={width} height={60}>
              <span>{label}</span>
            </foreignObject>
          </svg>
        );
      }, items)}
    </>
  );
}
