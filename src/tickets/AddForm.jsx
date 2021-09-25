import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {create} from "./actions";

export function AddForm() {
  const dispatch = useDispatch();
  const onBlur = useCallback(() => {
    console.log(`onBlur:`);
    dispatch(
      create(
        "tickets",
        {model: "quarters", id: "def234"},
        {model: "goals", id: "abc123"},
        "This is a ticket",
      ),
    );
  }, [dispatch]);
  return (
    <>
      <input type="text" name="label" placeholder="goal..." onBlur={onBlur} />
    </>
  );
}
