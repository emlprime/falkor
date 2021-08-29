import * as R from "ramda";
import {useSelector} from "react-redux";
import {getRecordIdsFor} from "./selectors";

const {map} = R;

export function List() {
  const recordIds = useSelector(getRecordIdsFor("abc123"));
  console.log("recordIds:", recordIds);
  return (
    <ul>
      {map(
        id => (
          <li key={id}>{id}</li>
        ),
        recordIds,
      )}
    </ul>
  );
}
