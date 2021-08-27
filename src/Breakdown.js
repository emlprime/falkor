import * as R from "ramda";

import {colors} from "./constants";

const {append, equals, prop, reduce} = R;
const itemWidth = 200;
const gap = 15;

const BreakdownItem = ({
  offset,
  size,
  id,
  originX,
  originY,
  planned,
  actual,
}) => {
  const width = size - 1 * 15 + itemWidth * size;
  return (
    <svg x={originX + offset} y={originY}>
      <rect
        x={0}
        y={0}
        width={itemWidth * planned}
        height={10}
        fill={colors.planned}
      />
      <rect
        x={0}
        y={12}
        width={itemWidth * actual}
        height={10}
        fill={colors.active}
      />
      <foreignObject y={22} width={width} height={60}>
        <p>Goal for Swimlane: {id}</p>
      </foreignObject>
    </svg>
  );
};

const CurrentBreakdownItem = ({
  offset,
  size,
  id,
  originX,
  originY,
  planned,
  actual,
}) => {
  const width = size - 1 * 15 + itemWidth * size;
  return (
    <svg x={originX + offset} y={originY}>
      <rect
        x={0}
        y={0}
        width={itemWidth * planned}
        height={10}
        fill={colors.planned}
      />
      <rect
        x={0}
        y={12}
        width={itemWidth * actual}
        height={10}
        fill={colors.active}
      />
      <foreignObject y={22} width={width} height="60">
        <p>Goal for Swimlane: {id}</p>
      </foreignObject>
    </svg>
  );
};

export const Breakdown = ({originX, originY}) => {
  const currentId = "Do Tuesday and Wednesday's Thing";
  return (
    <>
      {prop(
        "result",
        reduce(
          ({offset, result}, [id, [planned, actual]]) => {
            const size = actual > planned ? actual : planned;
            const Item = equals(currentId, id)
              ? CurrentBreakdownItem
              : BreakdownItem;
            return {
              result: append(
                <Item
                  key={id}
                  id={id}
                  size={size}
                  offset={offset}
                  originX={originX}
                  originY={originY}
                  planned={planned}
                  actual={actual}
                />,
                result,
              ),
              offset: offset + itemWidth * size + gap,
            };
          },
          {offset: 0, result: []},
          [
            ["Do Monday's Thing", [1, 1]],
            ["Do Tuesday and Wednesday's Thing", [1, 2]],
            ["Do Thursday's Thing", [1, 1]],
          ],
        ),
      )}
    </>
  );
};
