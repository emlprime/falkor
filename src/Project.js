import React from "react";
import styled from "styled-components";
import { Roster } from "./Roster";
import { ProgressChart } from "./ProgressChart";
import { CurrentFocus } from "./CurrentFocus";

export const Project = () => {
  return (
    <Section>
      <Roster id="roster" />
      <ProgressChart id="progress" />
      <CurrentFocus id="currentFocus" />
    </Section>
  );
};

const Section = styled.section`
  display: grid;
  grid-template: "roster progress" 1fr "currentFocus currentFocus" 1fr / 400px 1fr;
`;
