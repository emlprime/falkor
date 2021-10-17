import {map, prop, addIndex} from "ramda";
// import {itemWidth} from "../global/constants";
// import {BreakdownHeader} from "./BreakdownHeader";
import {BreakdownItem} from "./BreakdownItem";
import {useChosenFocus} from "./hooks";
// import {CurrentActions} from "./CurrentActions";

const mapWithIndex = addIndex(map);
// const deriveBreakdownHeaders = (model, columns, originX, originY) => {
//   const reduced = reduce(
//     ({offset, result}, column) => {
//       return {
//         result: append(
//           <BreakdownHeader
//             isCurrent={false}
//             key={`header_${column.model}_${column.id}`}
//             model={model}
//             item={column}
//             offset={offset}
//             originX={originX}
//             originY={originY}
//           />,

//           result,
//         ),
//         offset: offset + itemWidth,
//       };
//     },
//     {offset: 0, result: []},
//     columns,
//   );

//   return prop("result", reduced);
// };

// const deriveBreakdownItems = (model, columns, goal, originX, originY) => {
//   const reduced = reduce(
//     ({offset, result}, column) => {
//       return {
//         result: append(
//           <BreakdownItem
//             key={`item_${column.model}_${column.id}`}
//             model={model}
//             item={column}
//             goal={goal}
//             offset={offset}
//             originX={originX}
//             originY={originY}
//           />,
//           result,
//         ),
//         offset: offset + itemWidth + 10,
//       };
//     },
//     {offset: 0, result: []},
//     columns,
//   );
//   return prop("result", reduced);
// };

export const Breakdown = ({originX, originY}) => {
  const {columns, goal} = useChosenFocus();

  return (
    <>
      {mapWithIndex(
        (item, offset) => (
          <BreakdownItem
            key={prop("id", item)}
            item={item}
            goal={goal}
            offset={offset}
            originX={originX}
            originY={originY}
          />
        ),
        columns,
      )}
    </>
  );
};
