import * as R from "ramda";
import {useSelector} from "react-redux";

const {map} = R;

export const List = (currentIdSelector, selector, ListItem) => () => {
  const currentId = useSelector(currentIdSelector);
  const recordIds = useSelector(selector(currentId));

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
