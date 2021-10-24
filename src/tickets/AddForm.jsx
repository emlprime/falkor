import {useCallback} from "react";
import {useMutation} from "react-query";
import {isEmpty, complement} from "ramda";
import {useDispatch} from "react-redux";
import {create} from "./actions";
import {colors} from "../global/constants";
import {makePostRecord} from "../global/utils";
import styled from "styled-components";

const postTicket = makePostRecord("tickets");

const onSuccess = result => {
  console.log(`result:`, result);
};

export function AddForm({parentKey, goalKey}) {
  const {mutateAsync} = useMutation(newRecord => postTicket(newRecord), {
    mutationKey: "AddForm",
      onSettled: onSuccess,
  });
  const dispatch = useDispatch();

  const onBlur = useCallback(
    ({target: {value}}) => {
      if (complement(isEmpty)(value)) {
        const createAction = create("tickets", parentKey, goalKey, value);
        mutateAsync(createAction);
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
