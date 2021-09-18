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

export const useSetCurrentAncestry = ancestry => {
  const dispatch = useDispatch();
  const parentKey = head(ancestry);
  const items = useSelector(getByParentKey(parentKey));
  const itemsByStatus = groupBy(prop("status"), items);

  const deriveSetCurrentByStatus = deriveFirstItemOfStatus(
    itemsByStatus,
    ancestry,
  );
  const handleClickResolved = useCallback(() => {
    dispatch(
      a.setCurrentAncestry(deriveSetCurrentByStatus(knownStatuses.resolved)),
    );
  }, [dispatch, ancestry, itemsByStatus]);
  const handleClickActive = useCallback(
    () =>
      dispatch(
        a.setCurrentAncestry(deriveSetCurrentByStatus(knownStatuses.active)),
      ),
    [dispatch, ancestry, itemsByStatus],
  );
  const handleClickPlanned = useCallback(
    () =>
      dispatch(
        a.setCurrentAncestry(deriveSetCurrentByStatus(knownStatuses.planned)),
      ),
    [dispatch, ancestry, itemsByStatus],
  );
  return {
    [knownStatuses.resolved]: handleClickResolved,
    [knownStatuses.active]: handleClickActive,
    [knownStatuses.planned]: handleClickPlanned,
  };
};
