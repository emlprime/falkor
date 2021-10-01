import {useSelector} from "react-redux";
import {getByItem} from "../global/selectors";
import {useSetCurrentAncestryByItem} from "../global/hooks";
import {ButtonText} from "../global/Button";
import {SelectionIndicator} from "../global/SelectionIndicator";
import styled from "styled-components";

export function BreakdownHeader({isCurrent, item, offset, originX, originY}) {
  const {label} = useSelector(getByItem(item));
  const handleClick = useSetCurrentAncestryByItem(item);

  return (
    <svg x={originX + offset} y={originY}>
      {isCurrent && <SelectionIndicator width={100} />}
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
