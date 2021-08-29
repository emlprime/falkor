import {useDispatch} from "react-redux";
import global from "../global";

const {actions: a} = global;

export const useSetCurrentScope = scope => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(a.setCurrentScope(scope));
  };
  return handleClick;
};
