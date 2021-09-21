import * as R from "ramda";
import {itemWidth} from "../global/constants";
import {BreakdownItem} from "./BreakdownItem";
import {useChosenFocus} from "./hooks";

const {append, prop, reduce} = R;

const gap = 15;

const deriveBreakdownItems = (model, columns, originX, originY) => {
  const reduced = reduce(
    ({offset, result}, [id, size]) => {
      return {
        result: append(
          <BreakdownItem
            isCurrent={false}
            key={id}
            model={model}
            item={{model, id}}
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
    columns,
  );
  return prop("result", reduced);
};

export const Breakdown = ({originX, originY}) => {
  const {model, columns} = useChosenFocus();

  return <>{deriveBreakdownItems(model, columns, originX, originY)}</>;
};

// {AddActionButton && (
//   <AddActionButton
//     originX={originX}
//     originY={originY}
//     itemWidth={itemWidth}
//     gap={gap}
//   />
// )}
