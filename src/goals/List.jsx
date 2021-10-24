import * as R from "ramda";
import {useSelector} from "react-redux";
import {getCurrentParent} from "../global/selectors";
import {getItemsByParent} from "./selectors";
import {AddForm} from "./AddForm";
import {ListItem} from "./ListItem";

const {map} = R;

export const List = () => {
  const parentKey = useSelector(getCurrentParent);
  const items = useSelector(getItemsByParent(parentKey));

  return (
    <ul>
      {map(({model, id}) => {
        return (
          <ListItem
            key={`${model}_${id}`}
            model="goals"
            itemKey={{model, id}}
          />
        );
      }, items)}
      <li>
        <AddForm parentKey={parentKey} />
      </li>
    </ul>
  );
};
