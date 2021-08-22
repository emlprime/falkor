import styled from "styled-components";

export const Member = ({ isDriver, initials }) => {
  return <Tile isDriver={isDriver}>{initials}</Tile>;
};

const Tile = styled.div`
  background-color: #{(isDriver) => ? #5a0d51: #17435e};
  color: #ddd;
  width: 32px;
  height: 32px;
  border-radius: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
