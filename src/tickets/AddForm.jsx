import {useCallback} from "react";
import {isEmpty, complement} from "ramda";
import {useDispatch} from "react-redux";
import {create} from "./actions";
import {colors} from "../global/constants";
import styled from "styled-components";

export function AddForm({parentKey, goalKey}) {
  const dispatch = useDispatch();

  const onBlur = useCallback(
    ({target: {value}}) => {
      if (complement(isEmpty)(value)) {
        dispatch(create("tickets", parentKey, goalKey, value));
      }
    },
    [dispatch],
  );

  return (
    <>
      <Input type="text" name="label" placeholder="..." onBlur={onBlur} />
    </>
  );
}

const Input = styled.input`
  background-color: transparent;
  border: transparent;
  color: ${colors.SELECTED};
  padding: 4px;
  :focus,
  :hover {
    outline: 1px solid ${colors.SELECTED};
  }
`;
