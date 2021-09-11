import * as R from "ramda";
import {itemWidth} from "../global/constants";
import {BreakdownItem} from "./BreakdownItem";
import {useCurrentRecordIds} from "./hooks";

const {append, equals, prop, reduce} = R;
const gap = 15;

export const Breakdown = ({originX, originY}) => {
    const {scope, records, AddActionButton} = useCurrentRecordIds();

  const currentId = "Do Tuesday and Wednesday's Thing";
  return (
    <>
      {prop(
        "result",
        reduce(
          ({offset, result}, [id, size]) => {
            return {
              result: append(
                <BreakdownItem
                  isCurrent={equals(currentId, id)}
                  key={id}
                  scope={scope}
                  id={id}
                  size={size}
                  offset={offset}
                  originX={originX}
                  originY={originY}
                />,
                result,
              ),
              offset: offset + itemWidth * size + gap,
            };
          },
          {offset: 0, result: []},
          records,
        ),
      )}
      {AddActionButton && (
        <AddActionButton
          originX={originX}
          originY={originY}
          itemWidth={itemWidth}
          gap={gap}
        />
      )}
    </>
  );
};
