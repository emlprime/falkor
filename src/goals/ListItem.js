import {useSelector} from "react-redux";
import {getByItem} from "./selectors";
import {getIsCurrentGoal} from "../global/selectors";
import {colors} from "../global/constants";
import {Bullet} from "../global/Bullet";
import {useSetCurrentGoal} from "../global/hooks";
import styled from "styled-components";

export const ListItem = ({itemKey}) => {
  const item = useSelector(getByItem(itemKey));
  const handleClick = useSetCurrentGoal(itemKey);
  const isCurrent = useSelector(getIsCurrentGoal(itemKey));
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
