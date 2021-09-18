import * as R from "ramda";
import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import global from "../global";
import {knownStatuses} from "../global/constants";
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

const useHandleClickStatus = curry((
  ancestry,
  itemsByStatus,
  deriveSetCurrentByStatus,
  status,
) => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(a.setCurrentAncestry(deriveSetCurrentByStatus(status)));
  }, [dispatch, ancestry, itemsByStatus]);
});

export const useSetCurrentAncestry = ancestry => {
  const parentKey = head(ancestry);
  const items = useSelector(getByParentKey(parentKey));
  const itemsByStatus = groupBy(prop("status"), items);

  const deriveSetCurrentByStatus = deriveFirstItemOfStatus(
    itemsByStatus,
    ancestry,
  );
  const handleClickResolved = useHandleClickStatus(
    ancestry,
    itemsByStatus,
    deriveSetCurrentByStatus,
    knownStatuses.resolved,
  );
  const handleClickActive = useHandleClickStatus(
    ancestry,
    itemsByStatus,
    deriveSetCurrentByStatus,
    knownStatuses.active,
  );
  const handleClickPlanned = useHandleClickStatus(
    ancestry,
    itemsByStatus,
    deriveSetCurrentByStatus,
    knownStatuses.planned,
  );
  return {
    [knownStatuses.resolved]: handleClickResolved,
    [knownStatuses.active]: handleClickActive,
    [knownStatuses.planned]: handleClickPlanned,
  };
};
