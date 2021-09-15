import {useSelector} from "react-redux";
import {getByItem, getIsCurrent} from "./selectors";
import {colors} from "./constants";
import {Bullet} from "./Bullet";
import {useSetCurrentItem} from "./hooks";
import styled from "styled-components";

export const ListItem = itemKey => {
    console.log("itemKey:", itemKey)
  const item = useSelector(getByItem(itemKey));
    console.log("item:", item)

  const handleClick = useSetCurrentItem(item);

  const isCurrent = useSelector(getIsCurrent(item));

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
  isCurrent ? colors.selected : colors.deselected;

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
