import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as R from "ramda";
import styled from "styled-components";
import {colors} from "./constants";
import {Trash, Decompose} from "./icons";
import {getCurrentTicket} from "./selectors";
import {deleteItem} from "../tickets/actions";

const {equals, prop} = R;

const size = 24;
export function Button({name, originX, originY}) {
  const dispatch = useDispatch();
  const currentTicket = useSelector(getCurrentTicket);

  const onClick = useCallback(() => {
    if (equals("trash", name)) {
      dispatch(deleteItem(currentTicket));
    }
  }, [dispatch, currentTicket]);

  const Icon = prop(name, {trash: Trash, decompose: Decompose});
  return (
    <svg>
      <circle
        cx={originX}
        cy={originY}
        r={size}
        stroke={colors.SELECTED}
        strokeWidth="1"
        fill="transparent"
      />
      <foreignObject
        x={originX - 12}
        y={originY - 8}
        width={size}
        height={size}
      >
        <Style type="button" onClick={onClick}>
          <Icon />
        </Style>
      </foreignObject>
    </svg>
  );
}

const Style = styled.button`
  background-color: transparent;
  border: none;
`;

export function ButtonText({onClick, children}) {
  return (
    <TextStyle type="button" onClick={onClick}>
      {children}
    </TextStyle>
  );
}

const TextStyle = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${colors.SELECTED};
  :hover {
    filter: brightness(1.4);
  }
`;
