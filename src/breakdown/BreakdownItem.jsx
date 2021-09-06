import {colors, itemWidth, gap} from "../global/constants";
import {SelectionIndicator} from "../global/SelectionIndicator";

export function BreakdownItem({isCurrent, offset, size, id, originX, originY}) {
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
        <p>Goal for Swimlane: {id}</p>
      </foreignObject>
    </svg>
  );
}
