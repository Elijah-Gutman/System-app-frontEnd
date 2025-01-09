import { useEffect } from "react"; // Import useEffect from React
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
// import HighchartsSolidGauge from "highcharts/modules/solid-gauge.src";

// Initialize the gauge module
// HighchartsSolidGauge(Highcharts);

const getNow = () => {
  const now = new Date();
  return {
    date: now,
    hours: now.getHours() + now.getMinutes() / 60,
    minutes: (now.getMinutes() * 12) / 60 + (now.getSeconds() * 12) / 3600,
    seconds: (now.getSeconds() * 12) / 60,
  };
};

let now = getNow();

export function Clock() {
  useEffect(() => {
    Highcharts.chart("clock-container", {
      chart: {
        type: "gauge",
        height: "80%",
      },
      title: {
        text: "The Highcharts Clock",
      },
      pane: {
        background: [],
      },
      yAxis: {
        min: 0,
        max: 12,
        tickPosition: "inside",
      },
      series: [
        {
          data: [
            {
              id: "hour",
              y: now.hours,
            },
            {
              id: "minute",
              y: now.minutes,
            },
          ],
        },
      ],
    });
  }, []);

  return <div id="clock-container" className="w-40 h-40"></div>;
}

export default Clock;
