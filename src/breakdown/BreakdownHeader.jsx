import {useSelector} from "react-redux";
import {getByItem} from "../global/selectors";
import {useSetCurrentTicketByItem} from "../global/hooks";
import {ButtonText} from "../global/Button";
import styled from "styled-components";

export function BreakdownHeader({item, offset, originX, originY}) {
  const {label} = useSelector(getByItem(item));
  const handleClick = useSetCurrentTicketByItem(item);

  return (
    <svg x={originX + offset} y={originY}>
      <foreignObject x={10} y={0} width={200} height={60}>
        <H2>
          <ButtonText onClick={handleClick}>{label}</ButtonText>
        </H2>
      </foreignObject>
    </svg>
  );
}

const H2 = styled.h2`
  width: 200px;
`;
