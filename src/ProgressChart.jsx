import * as R from "ramda";
import Highcharts from "highcharts";
import HC_more from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";
import { List } from "./List";
import styled from "styled-components";

const { map } = R;

import { options } from "./progressOptions";

HC_more(Highcharts);

const mQId = (id) => ({ model: "quarters", id });
const mRId = (id) => ({ model: "releases", id });
const mSId = (id) => ({ model: "sprints", id });

export const ProgressChart = () => {
  const quartersAllIds = map(mQId, ["2021-Q3", "2021-Q4", "2022-Q1", "2022-Q2"]);
  const releasesAllIds = map(mRId, ["R157", "R158", "R159", "R160"]);
  const sprintsAllIds = map(mSId, ["Week1", "Week2", "Week3"]);

  return (
    <Section>
      <HighchartsReact id="chart" highcharts={Highcharts} options={options} />
      <section id="legends">
        <List id="quarters" allIds={quartersAllIds} />
        <List id="releases" allIds={releasesAllIds} />
        <List id="sprints" allIds={sprintsAllIds} />
      </section>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
`;
