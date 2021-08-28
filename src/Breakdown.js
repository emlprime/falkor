import * as R from "ramda";
import {itemWidth} from "./global/constants";
import {BreakdownItem} from "./BreakdownItem";

const {append, equals, prop, reduce} = R;
const gap = 15;

export const Breakdown = ({originX, originY}) => {
  const currentId = "Do Tuesday and Wednesday's Thing";
  return (
    <>
      {prop(
        "result",
        reduce(
          ({offset, result}, [id, [planned, actual]]) => {
            const size = actual > planned ? actual : planned;
            return {
              result: append(
                <BreakdownItem
                  isCurrent={equals(currentId, id)}
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
