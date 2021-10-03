import * as R from "ramda";
import {useSelector} from "react-redux";
import {getCurrentItem} from "../global/selectors";
import {getItemsByParent} from "./selectors";
import {AddForm} from "./AddForm";
import {ListItem} from "./ListItem";

const {map} = R;

export const List = () => {
  const parentId = useSelector(getCurrentItem);
  const items = useSelector(getItemsByParent(parentId));

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
        <AddForm parentId={parentId} />
      </li>
    </ul>
  );
};
