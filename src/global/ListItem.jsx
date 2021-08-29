import * as R from "ramda";
import {useSelector} from "react-redux";
import {getCurrentIdForScope} from "./selectors";
import {colors} from "./constants";
import {Bullet} from "./Bullet";
import {useSetCurrentScopeAndId} from "./hooks";
import styled from "styled-components";

const {curry, equals} = R;

export const ListItem = curry((scope, selector, {id}) => {
  const currentId = useSelector(getCurrentIdForScope(scope));
  const handleClick = useSetCurrentScopeAndId(scope, id);

  const isCurrent = equals(id, currentId);

  const {label, status = "PLANNED"} = useSelector(selector(id));
  return (
    <LI isCurrent={isCurrent} status={status}>
      <Bullet status={status} />
      <button type="button" disabled={isCurrent} onClick={handleClick}>
        {label}
      </button>
    </LI>
  );
});

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
