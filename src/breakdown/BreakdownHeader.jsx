import {useSelector} from "react-redux";
import {getByItem} from "../global/selectors";
import {SelectionIndicator} from "../global/SelectionIndicator";
import styled from "styled-components";

export function BreakdownHeader({isCurrent, item, offset, originX, originY}) {
  const {label} = useSelector(getByItem(item));
  return (
    <svg x={originX + offset} y={originY}>
      {isCurrent && <SelectionIndicator width={100} />}
      <foreignObject x={10} y={0} width={200} height={60}>
        <H2>{label}</H2>
      </foreignObject>
    </svg>
  );
}

const H2 = styled.h2`
  width: 200px;
`;
