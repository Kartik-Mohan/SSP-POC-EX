import React from "react";
import "../App.css";
import {
  GanttComponent,
  TaskFieldsModel,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-gantt";
import { projectData } from "./Gantt_data";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../Assets/CRD_Logo.png";
import "../App.css";
import BatchProcessing from "./BatchProcessing";
function Gantt() {
  const taskValues: TaskFieldsModel = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    child: "subtasks",
    notes: "status",
    dependency: "Predeceesor",
  };
  return (
    <div>
      <div className="topnav">
        <img className="image" src={logo} alt="Logo" width="180" height="50" />
        <div className="topnav-right">
          <a href="http://localhost:3000/">Dashboard</a>
          <a href="" className="isDisabled">
            Batch Processes
          </a>
        </div>
      </div>
      <BatchProcessing />
      <h5 className="BP">All Jobs</h5>
      <div style={{ margin: "15px", width: "98%" }}>
        {/* To change timeline view add timelineSettings={{timelineViewMode: "Day"} in below tag} */}
        <GanttComponent
          dataSource={projectData}
          taskFields={taskValues}
          // timelineSettings={{timelineViewMode:"Hour"}}
          // editSettings= {{   allowEditing: true,    allowTaskbarEditing: true}}
          timelineSettings={{
            timelineUnitSize: 30,
            topTier: { unit: "Hour" },
            bottomTier: { unit: "Minutes", count: 15 },
          }}
        >
          <ColumnsDirective>
            <ColumnDirective field="TaskID" headerText="Job"></ColumnDirective>
            <ColumnDirective
              field="TaskName"
              headerText="Job Name"
            ></ColumnDirective>
            <ColumnDirective
              field="status"
              headerText="Status"
            ></ColumnDirective>
            <ColumnDirective
              field="StartDate"
              format="dd-MMM-yy HH:MM"
            ></ColumnDirective>
            <ColumnDirective
              field="Duration"
              textAlign="Right"
            ></ColumnDirective>
          </ColumnsDirective>
        </GanttComponent>
      </div>
    </div>
  );
}

export default Gantt;
