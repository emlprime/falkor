import {getByParentKey} from "./selectors";
import {useSetCurrentAncestry as useSetCurrentAncestryGlobal} from "../global/hooks";

export const useSetCurrentAncestry = useSetCurrentAncestryGlobal(
  getByParentKey,
);
