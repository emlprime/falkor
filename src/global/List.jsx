import {useMemo} from "react";
import * as R from "ramda";
import {useSelector} from "react-redux";
import {getItemsByParent} from "./selectors";
import {ListItem} from "./ListItem";
import {getParentModel} from "./utils";

const {append, curry, find, map, propEq} = R;

export const List = curry((model, ancestry) => () => {
  console.log(`ancestry:`, R.toString(ancestry));
  const parentModel = getParentModel(model);
  console.log(`parentModel:`, parentModel);
  const currentAncestorAtModel = useMemo(
    () => find(propEq("model", parentModel), ancestry),
    [model, ancestry],
  );
  console.log(`currentAncestorAtModel:`, currentAncestorAtModel);

  const items = useSelector(getItemsByParent(currentAncestorAtModel));

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
