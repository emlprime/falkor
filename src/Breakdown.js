import * as R from "ramda";
import styled from "styled-components";
import {colors} from "./constants";

const {map} = R;

const BreakdownItem = ({index}) => {
  const width = 200;
  return (
    <Article>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox={`0 0 ${width} 20`}
        width={200}
        height={20}
      >
        <rect x={0} y={0} width={width} height={10} fill={colors.planned} />
        <rect x={0} y={10} width={width} height={10} fill={colors.active} />
      </svg>
      <p>Goal for Swimlane {index}. Things that we should know.</p>
    </Article>
  );
};

const width = 840;
const height = 100;
export const Breakdown = ({originX, originY}) => {
  return (
    <Container x={originX} y={originY} width={width} height={height}>
      <section>
        {map(
          i => (
            <BreakdownItem key={i} index={i} />
          ),
          [1, 2, 3, 4],
        )}
      </section>
    </Container>
  );
};

const Container = styled.foreignObject`
  width: ${width}px;
  section {
    display: flex;
    gap: 15px;
  }
`;

const Article = styled.article`
  width: 200px;
  height: 80px;
`;
