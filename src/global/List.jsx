import {useMemo} from "react";
import * as R from "ramda";
import {useSelector} from "react-redux";
import {getCurrentAncestry, getItemsByParent} from "./selectors";
import {ListItem} from "./ListItem";
import {getParentModel} from "./utils";

const {find, map, propEq} = R;

export const List = model => () => {
  const ancestry = useSelector(getCurrentAncestry);
  const parentModel = getParentModel(model);
  const currentAncestorAtModel = useMemo(
    () => find(propEq("model", parentModel), ancestry),
    [model, ancestry],
  );

  const items = useSelector(getItemsByParent(currentAncestorAtModel));

  return (
    <ul>
      {map(
        ({model, id}) => (
          <ListItem key={id} model={model} id={id} />
        ),
        items,
      )}
    </ul>
  );
};
