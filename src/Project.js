import React from "react";
import styled from "styled-components";
import {Roster} from "./Roster";
import {Breadcrumb} from "./Breadcrumb";
import {ChosenFocus} from "./ChosenFocus";
import {Breakdown} from "./Breakdown";
import {Goals} from "./Goals";
import {CurrentActions} from "./CurrentActions";
import {BurndownChart} from "./BurndownChart";
import {Yggdrasil} from "./Yggdrasil";

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
        <Yggdrasil originX={300} originY={100} />
        <foreignObject id="roster" width="500px" height="200px" x="0" y="0">
          <Roster />
        </foreignObject>
        <Breadcrumb originX={800} originY={300} />
        <ChosenFocus originX={200} originY={600} />
        <Breakdown originX={200} originY={800} />
        <BurndownChart originX={500} originY={600} />
        <CurrentActions originX={800} originY={730} />
        <foreignObject id="goals" width="300px" height="400px" x="1050" y="720">
          <Goals />
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
