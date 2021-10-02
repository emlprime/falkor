import * as R from "ramda";
import {useSelector} from "react-redux";
import {getCurrentItem} from "../global/selectors";
import {getItemsByParent} from "./selectors";
import {ListItem} from "./ListItem";

const {map} = R;

export const List = () => {
  const parentItem = useSelector(getCurrentItem);
  const items = useSelector(getItemsByParent(parentItem));

  return (
    <ul>
      {map(({model, id}) => {
        return <ListItem key={`${model}_${id}`} model="goals" itemKey={id} />;
      }, items)}
    </ul>
  );
};
