import React from "react";
import styled from "styled-components";
import {Roster} from "./members/Roster";
import {Breadcrumb} from "./global/Breadcrumb";
import {ChosenFocus} from "./breakdown/ChosenFocus";
import {Breakdown} from "./breakdown/Breakdown";
import {List as GoalList} from "./goals/List";
// import {useData} from "./global/hooks";
// import {BurndownChart} from "./breakdown/BurndownChart";
import {Yggdrasil} from "./global/Yggdrasil";

export const Project = ({width, height}) => {
  const viewBox = `0 0 ${width} ${height}`;
  return (
    <Section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox={viewBox}
        width={width}
        height={height}
      >
        <Yggdrasil originX={width / 6} originY={height / 8} />
        <foreignObject id="roster" width="500px" height="200px" x="0" y="0">
          <Roster />
        </foreignObject>
        <Breadcrumb originX={800} originY={300} />
        <ChosenFocus originX={200} originY={600} />
        <Breakdown originX={280} originY={670} />
        <foreignObject id="goals" width="300px" height="400px" x="1150" y="704">
          <GoalList />
        </foreignObject>
      </svg>
    </Section>
  );
};

const Section = styled.section`
  > svg {
    margin: 1rem;
    width: 98%;
    height: 98vh;
  }
`;

// <BurndownChart originX={500} originY={600} />
