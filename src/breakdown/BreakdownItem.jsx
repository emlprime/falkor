import {useSelector} from "react-redux";
import {colors, itemWidth, gap} from "../global/constants";
import {getByItem} from "../global/selectors";
import {SelectionIndicator} from "../global/SelectionIndicator";

export function BreakdownItem({
  isCurrent,
  item,
  offset,
  size,
  originX,
  originY,
}) {
  const {id, label} = useSelector(getByItem(item));
  const planned = 1;
  const actual = 1;
  const width = size - 1 * 15 + itemWidth * size;
  return (
    <svg x={originX + offset} y={originY}>
      {isCurrent && <SelectionIndicator width={width + 20} />}
      <rect
        x={10}
        y={10}
        width={itemWidth * planned - gap}
        height={10}
        fill={colors.planned}
      />
      <rect
        x={10}
        y={22}
        width={itemWidth * actual - gap}
        height={10}
        fill={colors.active}
      />
      <foreignObject x={10} y={32} width={width} height={60}>
        <p>
          {id}: {label}
        </p>
      </foreignObject>
    </svg>
  );
}
