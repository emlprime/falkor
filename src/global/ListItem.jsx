import * as R from "ramda";
import {useSelector} from "react-redux";
import {getCurrentIdForScope} from "./selectors";

const {curry, equals} = R;

export const ListItem = curry((scope, selector, {id}) => {
  const currentId = useSelector(getCurrentIdForScope(scope));

  const isCurrent = equals(id, currentId);

  const {label} = useSelector(selector(id));
  return (
    <li>
      {label} {isCurrent && "*"}
    </li>
  );
});
