import * as R from "ramda";
import {useSelector} from "react-redux";

const {curry} = R;

export const ListItem = curry((selector, {id}) => {
  const {label} = useSelector(selector(id));
  return <li>{label}</li>;
});
