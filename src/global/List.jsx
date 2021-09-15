import {useMemo} from "react";
import * as R from "ramda";
import {useSelector} from "react-redux";
import {getCurrentAncestry, getItemsByParent} from "./selectors";
import {ListItem} from "./ListItem";

const {find, map, propEq} = R;

export const List = model => () => {
  const ancestry = useSelector(getCurrentAncestry);
  const currentAncestorAtModel = useMemo(
    () => find(propEq("model", model), ancestry),
    [model, ancestry],
  );
  const items = useSelector(getItemsByParent(currentAncestorAtModel));

  return (
    <ul>
      {map(
        id => (
          <ListItem key={id} model={model} id={id} />
        ),
        items,
      )}
    </ul>
  );
};
