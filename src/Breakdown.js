import * as R from "ramda";
import styled from "styled-components";
import { colors } from "./constants";

const { map } = R;

const width = 240;

const BreakdownItem = ({ index }) => {
  return (
    <Article>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox={`0 0 ${width} 20`}
        width={width}
        height={20}
      >
        <rect x={0} y={0} width={width} height={10} fill={colors.planned} />
        <rect x={0} y={10} width={width} height={10} fill={colors.active} />
      </svg>
      <p>Goal for Swimlane {index}. Things that we should know.</p>
    </Article>
  );
};

export const Breakdown = () => {
  return (
    <Section>
      {map(
        (i) => (
          <BreakdownItem key={i} index={i} />
        ),
        [1, 2, 3, 4]
      )}
    </Section>
  );
};

const Section = styled.section`
  width: 1040px;
  display: flex;
  gap: 15px;
`;

const Article = styled.article`
  width: ${width}px;
  height: 80px;
`;
