import React from "react";
import styled from "styled-components";
import { Roster } from "./Roster";
import { ProgressChart } from "./ProgressChart";
import { ChosenFocus } from "./ChosenFocus";
import { Breakdown } from "./Breakdown";
import { Goals } from "./Goals";

export const Project = () => {
  return (
    <Section>
      <div id="roster">
        <Roster />
      </div>
      <div id="progress">
        <ProgressChart />
      </div>
      <div id="chosenfocus">
        <ChosenFocus />
      </div>
      <div id="breakdown">
        <Breakdown />
      </div>
      <div id="goals">
        <Goals />
      </div>
    </Section>
  );
};

const Section = styled.section`
  display: grid;
  #roster {
    grid-area: roster;
  }
  #progress {
    grid-area: progress;
  }
  #chosenfocusFocus {
    grid-area: chosenFocus;
  }
  #breakdown {
    grid-area: breakdown;
    margin-left: 10rem;
    margin-top: 80px;
  }
  #goals {
    grid-area: goals;
  }
  grid-template: "roster progress progress" auto "chosenFocus chosenFocus chosenFocus" auto "breakdown breakdown goals" auto / 450px 1fr 400px;
`;
