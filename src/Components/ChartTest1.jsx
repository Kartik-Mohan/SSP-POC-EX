import * as React from "react";
import * as ReactDOM from "react-dom";
import "../App.css";
import {
  ChartComponent,
  SeriesCollectionDirective,
  AxesDirective,
  AxisDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Legend,
  Category,
  Tooltip,
  DataLabel,
  LineSeries,
} from "@syncfusion/ej2-react-charts";
class ChartTest1 extends React.Component {
  constructor() {
    super(...arguments);
    this.data = [
      { x: "Su", y: 20, y1: 25 },
      { x: "Mo", y: 30, y1: 28 },
      { x: "Tu", y: 25, y1: 27 },
      { x: "We", y: 34, y1: 26 },
      { x: "Th", y: 40, y1: 27 },
      { x: "Fr", y: 70, y1: 33 },
      { x: "Sa", y: 60, y1: 31 },
    ];
    this.primaryxAxis = { valueType: "Category", title: "Months", interval: 1 };
    this.primaryyAxis = {
      title: "Total Users",
      minimum: 0,
      maximum: 90,
      interval: 20,
      lineStyle: { width: 0 },
      labelFormat: "{value}",
    };
    this.lines = { width: 0 };
    this.marker = {
      visible: true,
      width: 10,
      height: 10,
      border: { width: 2, color: "#F8AB1D" },
    };
  }
  render() {
    return (
      <ChartComponent
        style={{ width: "300px", height: "400px" }}
        className="grid-item"
        primaryXAxis={this.primaryxAxis}
        primaryYAxis={this.primaryyAxis}
        title="Total User / System Performance"
      >
        <Inject
          services={[
            ColumnSeries,
            LineSeries,
            Legend,
            Tooltip,
            DataLabel,
            Category,
          ]}
        />
        <AxesDirective>
          <AxisDirective
            rowIndex={1}
            name="yAxis1"
            opposedPosition={true}
            title="Response Time"
            labelFormat="{value}"
            minimum={24}
            maximum={36}
            interval={1}
            majorGridLines={this.lines}
            lineStyle={this.lines}
          ></AxisDirective>
        </AxesDirective>
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={this.data}
            xName="x"
            yName="y"
            name="Total Users (Concurrent)"
            type="Column"
          ></SeriesDirective>
          <SeriesDirective
            dataSource={this.data}
            xName="x"
            yName="y1"
            name="Response Time (Milliseconds)"
            type="Line"
            marker={this.marker}
            yAxisName="yAxis1"
          ></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    );
  }
}

export default ChartTest1;
