import * as R from "ramda";
import {itemWidth} from "../global/constants";
import {BreakdownHeader} from "./BreakdownHeader";
import {useChosenFocus} from "./hooks";

const {append, prop, reduce} = R;

const deriveBreakdownHeaders = (model, columns, originX, originY) => {
  const reduced = reduce(
    ({offset, result}, column) => {
      console.log(`column:`, column, offset);
      return {
        result: append(
          <BreakdownHeader
            isCurrent={false}
            key={column}
            model={model}
            item={column}
            offset={offset}
            originX={originX}
            originY={originY}
          />,

          result,
        ),
        offset: offset + itemWidth,
      };
    },
    {offset: 0, result: []},
    columns,
  );
  return prop("result", reduced);
};

export const Breakdown = ({originX, originY}) => {
  const {model, columns} = useChosenFocus();

  return <>{deriveBreakdownHeaders(model, columns, originX, originY)}</>;
};

// {AddActionButton && (
//   <AddActionButton
//     originX={originX}
//     originY={originY}
//     itemWidth={itemWidth}
//     gap={gap}
//   />
// )}
