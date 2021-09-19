import {useCallback} from "react";
import * as R from "ramda";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentAncestry, setCurrentGoal} from "./actions";
import {getItemsByParent} from "../goals/selectors";
import {knownStatuses as ks} from "./constants";

const {append, curry, head, groupBy, last, pick, pipe, prop} = R;

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
      dispatch(setCurrentAncestry(deriveSetCurrentByStatus(status)));
    }, [dispatch, ancestry, itemsByStatus]);
  },
);

export const useSetCurrentAncestryByStatus = curry(
  (getByParentKey, ancestry) => {
    const parentKey = head(ancestry);
    const items = useSelector(getByParentKey(parentKey));
    const itemsByStatus = groupBy(prop("status"), items);

    // curry method to get the first item of a given status for this model
    const deriveSetCurrentByStatus = deriveFirstItemOfStatus(
      itemsByStatus,
      ancestry,
    );

    // curry method to get the appropriate handle click for a given status
    const deriveHandleClickForStatus = useHandleClickStatus(
      ancestry,
      itemsByStatus,
      deriveSetCurrentByStatus,
    );

    // pre calc one method for each known status
    const handleClickResolved = deriveHandleClickForStatus(ks.resolved);
    const handleClickActive = deriveHandleClickForStatus(ks.active);
    const handleClickPlanned = deriveHandleClickForStatus(ks.planned);

    // an object that converts the status into a dispatched click handler
    return {
      [ks.resolved]: handleClickResolved,
      [ks.active]: handleClickActive,
      [ks.planned]: handleClickPlanned,
    };
  },
);

export const useSetCurrentAncestry = ancestry => {
  const dispatch = useDispatch();
  const item = last(ancestry);
  const goals = useSelector(getItemsByParent(item));
  const goal = head(goals);
  return useCallback(() => {
    dispatch(setCurrentAncestry(ancestry));
    dispatch(setCurrentGoal(goal));
  }, [dispatch, ancestry]);
};

export const useSetCurrentGoal = goalKey => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(setCurrentGoal(goalKey));
  }, [dispatch, goalKey]);
};
