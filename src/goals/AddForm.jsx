import {useCallback, useState} from "react";
import {useMutation} from "react-query";
import {isEmpty, complement, isNil} from "ramda";
import {useDispatch} from "react-redux";
import {create} from "./actions";
import {colors} from "../global/constants";
import {NAME} from "./constants";
import {makePostRecord} from "../global/utils";
import styled from "styled-components";

const postGoal = makePostRecord(NAME);
export function AddForm({parentKey}) {
  const mutation = useMutation(newRecord => postGoal(newRecord));
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const onBlur = useCallback(() => {
    if (complement(isEmpty)(value) && complement(isNil)(value)) {
      console.log(`value:`, value);
      const createAction = create(NAME, parentKey, value);
      dispatch(createAction);
      mutation.mutate(createAction);
      setValue("");
    }
  }, [dispatch, value, setValue]);

  return (
    <>
      <Input
        type="text"
        name="label"
        placeholder="..."
        onBlur={onBlur}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </>
  );
}

const Input = styled.input`
  background-color: transparent;
  border: 1px solid transparent;
  color: ${colors.SELECTED};
  padding: 4px;
  :hover,
  :focus {
    outline: 1px solid ${colors.SELECTED};
  }
`;
