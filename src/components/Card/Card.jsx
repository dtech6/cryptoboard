import React, { useState } from "react";
import "./card.css";
import Chart from "react-apexcharts";

const Card = ({ title, bgColor }) => {
  const [series] = useState([
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ]);
  const [options] = useState({
    chart: {
      type: "area",
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: [!bgColor ? "#7d67ff" : "#FFF"],
      width: 2,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    fill: {
      colors: [!bgColor ? "#7d67ff" : "#FFF"],
      gradient: {
        enabled: true,
        opacityFrom: 0.55,
        opacityTo: 0.2,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
  });

  return (
    <div className={bgColor ? "card" : "card no-bg"}>
      <div className="head">
        <h1>
          $<span>1800</span>
        </h1>
        <Chart
          options={options}
          series={series}
          type="area"
          height={90}
          width={130}
        />
      </div>

      <div className="stats">
        <div className="profit">
          <p>Profit</p>
          <p>+2.87%</p>
        </div>
        <div className="loss">
          <p>Loss</p>
          <p>-1.87%</p>
        </div>
        <div className="netral">
          <p>Netral</p>
          <p>2.70%</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
