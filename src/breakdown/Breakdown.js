import * as R from "ramda";
import {itemWidth} from "../global/constants";
import {BreakdownHeader} from "./BreakdownHeader";
import {BreakdownItem} from "./BreakdownItem";
import {useChosenFocus} from "./hooks";

const {append, prop, reduce} = R;

const deriveBreakdownHeaders = (model, columns, originX, originY) => {
  const reduced = reduce(
    ({offset, result}, column) => {
      return {
        result: append(
          <BreakdownHeader
            isCurrent={false}
            key={`header_${column.model}_${column.id}`}
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
    console.log(`reduced:`, reduced)
  return prop("result", reduced);
};

const deriveBreakdownItems = (model, columns, goal, originX, originY) => {
  const reduced = reduce(
    ({offset, result}, column) => {
      return {
        result: append(
          <BreakdownItem
            key={`item_${column.model}_${column.id}`}
            model={model}
            item={column}
            goal={goal}
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
  const {model, columns, goal} = useChosenFocus();

  return (
    <>
      {deriveBreakdownHeaders(model, columns, originX, originY)}
      {deriveBreakdownItems(model, columns, goal, originX, originY + 40)}
    </>
  );
};
