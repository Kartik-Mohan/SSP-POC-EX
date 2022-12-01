import React from "react";
import "../App.css";
import {
  ChartComponent,
  Inject,
  LineSeries,
  SeriesCollectionDirective,
  ColumnSeries,
  MultiLevelLabel,
  SeriesDirective,
  Category,
  Legend,
  DataLabel,
  Tooltip,
  Chart,
  StackingLineSeries,
} from "@syncfusion/ej2-react-charts";
import { salesData, salesData2, salesData3, salesData4 } from "./Chart_data";
import { chartData1, chartData2 } from "./Chart2_data";
import logo from "../Assets/CRD_Logo.png";
import CombiChart1 from "./ChartTest1";
import CombiChart2 from "./ChartTest2";
import BarChart from "./BarChart";
import CPI_Table from "./CPI_Table";
import RR_UB from "./RR_UB";
import EP from "./EP";

function Chart1() {
  const customLabel = (args: any) => {
    if (args.text === "France") args.labelStyle.color = "red";
  };

  return (
    <div className="Dashboard">
      <div>
        <div className="topnav">
          <img
            className="image"
            src={logo}
            alt="Logo"
            width="180"
            height="50"
          />
          <div className="topnav-right">
            <a href="" className="isDisabled">
              Dashboard
            </a>
            <a href="http://localhost:3000/batchProcessing">Batch Processes</a>
          </div>
        </div>
      </div>
      <br />
      {/* \\\\\\\\\\\\\\\\\\\\\\\1\\\\\\\\\\\\\\\\\\\\\\\\ */}
      <div className="box">
        <h5 className="heading">KPIs (Production) 🢓</h5>
        <span className="grid-container">
          <div className="grid">
            <CombiChart1 />
          </div>

          {/* \\\\\\\\\\\\\\\\\\\\\\\2\\\\\\\\\\\\\\\\\\\\\\\\ */}

          <ChartComponent
            className="grid"
            style={{ width: "300px", height: "400px" }}
            primaryXAxis={{ valueType: "Category" }}
            title="Orders"
            primaryYAxis={{ title: "Orders" }}
            legendSettings={{ visible: true }}
            tooltip={{ enable: true }}
          >
            <Inject
              services={[LineSeries, Category, Legend, DataLabel, Tooltip]}
            ></Inject>
            <SeriesCollectionDirective>
              <SeriesDirective
                dataSource={salesData}
                xName="month"
                yName="sales"
                type="Line"
                name="Orders generated"
                marker={{ dataLabel: { visible: true }, visible: true }}
              ></SeriesDirective>
              <SeriesDirective
                dataSource={salesData2}
                xName="month"
                yName="sales"
                type="Line"
                name="Sent to trading"
                marker={{ dataLabel: { visible: true }, visible: true }}
              ></SeriesDirective>
              <SeriesDirective
                dataSource={salesData3}
                xName="month"
                yName="sales"
                type="Line"
                name="Executive 1"
                marker={{ dataLabel: { visible: true }, visible: true }}
              ></SeriesDirective>
            </SeriesCollectionDirective>
          </ChartComponent>
          {/* ||||||||||||||||||||||||\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\3||||||||||||||| */}

          <div className="grid">
            <ChartComponent
              className="grid-item"
              style={{ width: "400px", height: "200px" }}
              primaryXAxis={{ valueType: "Category" }}
              title="FIX Volume"
              primaryYAxis={{ title: "Incoming" }}
              legendSettings={{ visible: true }}
              tooltip={{ enable: true }}
            >
              <Inject
                services={[LineSeries, Category, Legend, DataLabel, Tooltip]}
              ></Inject>
              <SeriesCollectionDirective>
                <SeriesDirective
                  dataSource={salesData}
                  xName="month"
                  yName="sales"
                  type="Line"
                  marker={{ dataLabel: { visible: true }, visible: true }}
                ></SeriesDirective>
                <SeriesDirective
                  dataSource={salesData3}
                  xName="month"
                  yName="sales"
                  type="Line"
                  marker={{ dataLabel: { visible: true }, visible: true }}
                ></SeriesDirective>
              </SeriesCollectionDirective>
            </ChartComponent>
            {/* \\\\\\]]]]]]]]]]]]]]]] */}
            <ChartComponent
              id="inner2"
              className="grid-item"
              style={{ width: "400px", height: "200px" }}
              primaryXAxis={{ valueType: "Category" }}
              primaryYAxis={{ title: "Outgoing" }}
              legendSettings={{ visible: true }}
              tooltip={{ enable: true }}
            >
              <Inject
                services={[LineSeries, Category, Legend, DataLabel, Tooltip]}
              ></Inject>
              <SeriesCollectionDirective>
                <SeriesDirective
                  dataSource={salesData}
                  xName="month"
                  yName="sales"
                  type="Line"
                  marker={{ dataLabel: { visible: true }, visible: true }}
                ></SeriesDirective>
                <SeriesDirective
                  dataSource={salesData3}
                  xName="month"
                  yName="sales"
                  type="Line"
                  marker={{ dataLabel: { visible: true }, visible: true }}
                ></SeriesDirective>
                <SeriesDirective
                  dataSource={salesData4}
                  xName="month"
                  yName="sales"
                  type="Line"
                  marker={{ dataLabel: { visible: true }, visible: true }}
                ></SeriesDirective>
              </SeriesCollectionDirective>
            </ChartComponent>
          </div>
          {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
          <div className="grid">
            <CombiChart2 />
          </div>
        </span>
      </div>
      <br />

      <div className="box">
        <h5 className="heading">
          Scheduled and Upcoming Batches (Production) 🢓
        </h5>
        <span className="grid-container">
          <BarChart />
          <CPI_Table />
          <RR_UB />
        </span>
      </div>
      <br />
      <div className="box">
        <h5 className="heading">Environment (Production) 🢓</h5>
        <span className="grid-container">
          <div className="frame">
            <EP />
          </div>
        </span>
      </div>
      <br />
      <div className="box">
        <h5 className="heading">Development 1 (Production) 🢓</h5>
        <span className="grid-container">
          <div className="frame">
            <EP />
          </div>
        </span>
      </div>
      <br />
      <div className="box">
        <h5 className="heading">Development 3 (Production) 🢓</h5>
        <span className="grid-container">
          <div className="frame">
            <EP />
          </div>
        </span>
      </div>
    </div>
  );
}

export default Chart1;
