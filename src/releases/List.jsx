import {NAME} from "./constants";
import {getCurrentQuarterId} from "../global/selectors";
import {getRecordIdsFor, getRecordFor} from "./selectors";
import {ListItem as GlobalListItem} from "../global/ListItem";
import {List as GlobalList} from "../global/List";

const ListItem = GlobalListItem(NAME, getRecordFor);

export const List = GlobalList(getCurrentQuarterId, getRecordIdsFor, ListItem);
