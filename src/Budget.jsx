import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {chartOptions} from "./chartOptions";

export function Budget() {
  return (
    <section>
      <h1>Budget</h1>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </section>
  );
}

// Data generated from http://www.bikeforums.net/professional-cycling-fans/1113087-2017-tour-de-france-gpx-tcx-files.html

// Now create the chart
