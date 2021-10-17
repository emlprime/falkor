import {useSelector} from "react-redux";
import {getByItem, getIsCurrentItem} from "./selectors";
import {colors} from "./constants";
import {Bullet} from "./Bullet";
import {useSetCurrentAncestry} from "./hooks";
import styled from "styled-components";

export const ListItem = ({itemKey, ancestry}) => {
  const item = useSelector(getByItem(itemKey));
  const handleClick = useSetCurrentAncestry(ancestry);
  const isCurrent = useSelector(getIsCurrentItem(itemKey));
  const {label, status = "PLANNED"} = useSelector(getByItem(item));

  return (
    <LI isCurrent={isCurrent} status={status}>
      <Bullet status={status} />
      <button type="button" disabled={isCurrent} onClick={handleClick}>
        {label}
      </button>
    </LI>
  );
};

const calcColor = ({isCurrent}) =>
  isCurrent ? colors.SELECTED : colors.DESELECTED;

const LI = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  button {
    background-color: transparent;
    border: none;
    color: ${calcColor};
    :hover {
      color: white;
    }
  }
`;
