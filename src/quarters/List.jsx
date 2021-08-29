import * as R from "ramda";
import {useSelector} from "react-redux";
import {getRecordIdsFor, getRecordFor} from "./selectors";

const {map} = R;

function ListItem({id}) {
  const {label} = useSelector(getRecordFor(id));
  return <li>{label}</li>;
}

export function List() {
  const recordIds = useSelector(getRecordIdsFor("abc123"));
  console.log("recordIds:", recordIds);
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
}
