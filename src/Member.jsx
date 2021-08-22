import styled from "styled-components";

export const Member = ({ isDriver, initials }) => {
  return <Tile isDriver={isDriver}>{initials}</Tile>;
};

const calcColor = ({ isDriver }) => {
  return isDriver ? "#5a0d51" : "#17435e";
};

const Tile = styled.div`
  background-color: ${calcColor};
  color: #ddd;
  width: 32px;
  height: 32px;
  border-radius: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
