import * as R from "ramda";
import styled from "styled-components";
import {Bullet} from "./Bullet";

const {map} = R;

const Goal = ({index}) => {
  return (
    <Article>
      <Bullet status={index == 2 ? "active" : "deselected"} />
      <div>Goal for Swimlane {index}. Things that we should know.</div>
    </Article>
  );
};

export const Goals = () => {
  return (
    <Section>
      {map(
        i => (
          <Goal key={i} index={i} />
        ),
        [1, 2, 3, 4],
      )}
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  height: 400px;
  flex-direction: column;
  justify-content: space-between;
`;

const Article = styled.article`
  display: flex;
  gap: 5px;
`;
