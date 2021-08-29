import * as R from "ramda";
import {useSelector} from "react-redux";

const {map, curry} = R;

export const List = curry((selector, ListItem, {id}) => {
  console.log(id);
  const recordIds = useSelector(selector("abc123"));

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
});
