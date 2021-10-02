import {useMemo} from "react";
import * as R from "ramda";
import {useSelector} from "react-redux";
import {getItemsByParent} from "./selectors";
import {ListItem} from "./ListItem";
import {getParentModel} from "./utils";

const {append, curry, find, map, propEq} = R;

export const List = curry((model, ancestry) => () => {
  const parentModel = getParentModel(model);
  const currentAncestorAtModel = useMemo(
    () => find(propEq("model", parentModel), ancestry),
    [model, ancestry],
  );

  const items = useSelector(getItemsByParent(currentAncestorAtModel));

  console.log(
    `context:`,
    JSON.stringify(
      {
        ancestry: ancestry,
        parentModel,
        model,
        currentAncestorAtModel,
        items,
      },
      null,
      2,
    ),
  );

  return (
    <ul>
      {map(({model, id}) => {
        const itemKey = {model, id};
        return (
          <ListItem
            key={id}
            itemKey={itemKey}
            ancestry={append(itemKey, ancestry)}
          />
        );
      }, items)}
    </ul>
  );
});
