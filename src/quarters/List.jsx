import {getRecordIdsFor, getRecordFor} from "./selectors";
import {ListItem as GlobalListItem} from "../global/ListItem";
import {List as GlobalList} from "../global/List";

const ListItem = GlobalListItem(getRecordFor);

export const List = GlobalList(getRecordIdsFor, ListItem);
