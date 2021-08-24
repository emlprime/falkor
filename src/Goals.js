import * as R from "ramda";
import styled from "styled-components";
import { Bullet } from "./Bullet";

const { map } = R;

const Goal = ({ index }) => {
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
        (i) => (
          <Goal index={i} />
        ),
        [1, 2, 3, 4]
      )}
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

const Article = styled.article`
  width: 220px;
  display: flex;
  gap: 5px;
`;
