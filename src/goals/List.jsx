import {useMemo} from "react";
import * as R from "ramda";
import {useSelector} from "react-redux";
import {getCurrentGoal} from "../global/selectors";
import {getItemsByParent} from "./selectors";

const {find, map, propEq} = R;

export const List = parentItem => () => {
  const goal = useSelector(getCurrentGoal);
  const items = useSelector(getItemsByParent(parentItem));

  return (
    <ul>
      {map(
        id => (
          <ListItem key={id} model="goals" id={id} />
        ),
        items,
      )}
    </ul>
  );
};
