import {useCallback} from "react";
import {isEmpty, complement} from "ramda";
import {useDispatch} from "react-redux";
import {create} from "./actions";

export function AddForm({parentId, goalId}) {
  const dispatch = useDispatch();

  const onBlur = useCallback(
    ({target: {value}}) => {
      if (complement(isEmpty)(value)) {
        dispatch(create("tickets", parentId, goalId, value));
      }
    },
    [dispatch],
  );

  return (
    <>
      <input type="text" name="label" placeholder="goal..." onBlur={onBlur} />
    </>
  );
}
