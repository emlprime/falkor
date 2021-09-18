import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import global from "../global";
import {
  getCurrentProject,
  getCurrentByModel,
  getCurrentAncestry,
} from "./selectors";

const {actions: a} = global;

export const useSetCurrentItemByModelAndStatus = model => {
  console.log(`model:`, model);
  const dispatch = useDispatch();
  const currentAncestry = useSelector(getCurrentAncestry);
  console.log(`currentAncestry:`, currentAncestry);
  const currentProject = useSelector(getCurrentProject);
  console.log(`currentProject:`, currentProject);

  const item = useSelector(getCurrentByModel(model));
  console.log("currrent item:", model, item);
  const handleClick = useCallback(
    status => {
      dispatch(a.setCurrentItemByModelAndStatus(model, status));
    },
    [dispatch, model],
  );
  return handleClick;
};

export const useSetCurrentItem = itemKey => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(a.setCurrentItem(itemKey));
  };
  return handleClick;
};

export const useSetCurrentScopeAndId = (scope, id) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(a.setCurrentId(scope, id));
  };
  return handleClick;
};
