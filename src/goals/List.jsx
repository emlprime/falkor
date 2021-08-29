import {getCurrentSprintId} from "../global/selectors";
import {getRecordIdsFor, getRecordFor} from "./selectors";
import {ListItem as GlobalListItem} from "../global/ListItem";
import {List as GlobalList} from "../global/List";

const ListItem = GlobalListItem("goals", getRecordFor);

export const List = GlobalList(getCurrentSprintId, getRecordIdsFor, ListItem);
