import * as R from "ramda";
import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import global from "../global";
import {knownStatuses as ks} from "../global/constants";
import {getByParentKey} from "./selectors";

const {actions: a} = global;
const {append, curry, head, groupBy, pick, pipe, prop} = R;

const deriveFirstItemOfStatus = curry((itemsByStatus, ancestry, status) =>
  append(
    pipe(
      prop(status),
      head,
      pick(["model", "id"]),
    )(itemsByStatus),
    ancestry,
  ),
);

const useHandleClickStatus = curry(
  (ancestry, itemsByStatus, deriveSetCurrentByStatus, status) => {
    const dispatch = useDispatch();
    return useCallback(() => {
      dispatch(a.setCurrentAncestry(deriveSetCurrentByStatus(status)));
    }, [dispatch, ancestry, itemsByStatus]);
  },
);

export const useSetCurrentAncestry = ancestry => {
  const parentKey = head(ancestry);
  const items = useSelector(getByParentKey(parentKey));
  const itemsByStatus = groupBy(prop("status"), items);

  const deriveSetCurrentByStatus = deriveFirstItemOfStatus(
    itemsByStatus,
    ancestry,
  );
  const deriveHandleClickForStatus = useHandleClickStatus(
    ancestry,
    itemsByStatus,
    deriveSetCurrentByStatus,
  );
  const handleClickResolved = deriveHandleClickForStatus(ks.resolved);
  const handleClickActive = deriveHandleClickForStatus(ks.active);
  const handleClickPlanned = deriveHandleClickForStatus(ks.planned);

  return {
    [ks.resolved]: handleClickResolved,
    [ks.active]: handleClickActive,
    [ks.planned]: handleClickPlanned,
  };
};
