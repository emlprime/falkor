import {getByParentKey} from "./selectors";
import {useSetCurrentAncestryByStatus as useSetCurrentAncestryByStatusGlobal} from "../global/hooks";

export const useSetCurrentAncestryByStatus = useSetCurrentAncestryByStatusGlobal(
  getByParentKey,
);
