import {getAll, getGroupedByStatus} from "./selectors";
import {useSetCurrentAncestryByStatus as useSetCurrentAncestryByStatusGlobal} from "../global/hooks";

export const useSetCurrentAncestryByStatus = useSetCurrentAncestryByStatusGlobal(
  getAll,
  getGroupedByStatus,
);
