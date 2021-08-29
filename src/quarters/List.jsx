import {getCurrentProjectId} from "../global/selectors";
import {getRecordIdsFor, getRecordFor} from "./selectors";
import {ListItem as GlobalListItem} from "../global/ListItem";
import {List as GlobalList} from "../global/List";

const ListItem = GlobalListItem("quarters", getRecordFor);

export const List = GlobalList(getCurrentProjectId, getRecordIdsFor, ListItem);
