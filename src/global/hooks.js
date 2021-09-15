import {useDispatch} from "react-redux";
import global from "../global";
import {getChildModel} from "./utils";

const {actions: a} = global;

export const useSetCurrentItemByModel = model => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(a.setCurrentScope(model));
  };
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
    const newScope = getChildModel(scope);
    dispatch(a.setCurrentScope(newScope));
    dispatch(a.setCurrentId(scope, id));
  };
  return handleClick;
};
