import * as R from "ramda";
import styled from "styled-components";

const { map } = R;

export const List = ({ allIds }) => {
  return (
    <UL>
      {map(
        ({ id }) => (
          <li>{id}</li>
        ),
        allIds
      )}
    </UL>
  );
};

const UL = styled.ul`
  li {
    list-style-type: circle;
  }
`;
