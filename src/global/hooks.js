import * as R from "ramda";
import {useDispatch} from "react-redux";
import global from "../global";
import {scopes} from "./constants";

const {actions: a} = global;
const {pipe, findIndex, equals, inc, flip, nth} = R;

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

const getChildScope = scope =>
  pipe(
    findIndex(equals(scope)),
    inc,
    flip(nth)(scopes),
  )(scopes);

export const useSetCurrentScopeAndId = (scope, id) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    const newScope = getChildScope(scope);
    dispatch(a.setCurrentScope(newScope));
    dispatch(a.setCurrentId(scope, id));
  };
  return handleClick;
};
