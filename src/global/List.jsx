import * as R from "ramda";
import {useSelector} from "react-redux";

const {map} = R;

export const List = (currentIdSelector, selector, ListItem) => () => {
  const currentId = useSelector(currentIdSelector);
  // console.log("currentId:", currentId);
  const recordIds = useSelector(selector(currentId));
  // console.log("recordIds:", recordIds);

  return (
    <ul>
      {map(
        id => (
          <ListItem key={id} id={id} />
        ),
        recordIds,
      )}
    </ul>
  );
};
