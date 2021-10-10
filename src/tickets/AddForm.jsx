import {useCallback} from "react";
import {useMutation} from "react-query";
import {isEmpty, complement} from "ramda";
import {useDispatch} from "react-redux";
import {create} from "./actions";
import {colors} from "../global/constants";
import {makePostRecord} from "../global/utils";
import styled from "styled-components";

const postTicket = makePostRecord("tickets");

export function AddForm({parentId, goalId}) {
  const mutation = useMutation(newRecord => postTicket(newRecord));
  const dispatch = useDispatch();

  const onBlur = useCallback(
    ({target: {value}}) => {
      if (complement(isEmpty)(value)) {
        const createAction = create("tickets", parentId, goalId, value);
        dispatch(createAction);
        mutation.mutate(createAction);
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
