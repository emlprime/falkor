import {useCallback, useState} from "react";
import {isEmpty, complement} from "ramda";
import {useDispatch} from "react-redux";
import {create} from "./actions";
import {colors} from "../global/constants";
import styled from "styled-components";

export function AddForm({parentId}) {
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const onBlur = useCallback(() => {
    if (complement(isEmpty)(value)) {
      dispatch(create("goals", parentId, value));
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
  border: 1px solid ${colors.SELECTED};
  color: ${colors.SELECTED};
  padding: 4px;
  :focus {
    outline: 1px solid ${colors.SELECTED};
  }
`;
