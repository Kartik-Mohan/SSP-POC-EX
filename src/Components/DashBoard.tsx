import React from "react";
import { DashboardLayoutComponent } from "@syncfusion/ej2-react-layouts";
import EP from "./EP";

function DashBoard() {
  let cellSpacing = [5, 5];
  return (
    <div>
      <div className="control-section">
        <DashboardLayoutComponent
          id="defaultLayout"
          cellSpacing={cellSpacing}
          allowResizing={false}
          columns={5}
        >
          <div
            id="one"
            className="e-panel"
            data-row="0"
            data-col="0"
            data-sizex="5"
            data-sizey="1"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">0</div>
            </div>
          </div>
          <div
            id="two"
            className="e-panel"
            data-row="1"
            data-col="0"
            data-sizex="5"
            data-sizey="1"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">1</div>
            </div>
          </div>
          <div
            id="three"
            className="e-panel"
            data-row="0"
            data-col="1"
            data-sizex="5"
            data-sizey="1"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">2</div>
            </div>
          </div>
          <div
            id="four"
            className="e-panel"
            data-row="2"
            data-col="1"
            data-sizex="5"
            data-sizey="1"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">3</div>
            </div>
          </div>
          <div
            id="five"
            className="e-panel"
            data-row="2"
            data-col="2"
            data-sizex="5"
            data-sizey="1"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">4</div>
            </div>
          </div>
          <div
            id="six"
            className="e-panel"
            data-row="0"
            data-col="3"
            data-sizex="5"
            data-sizey="1"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">5</div>
            </div>
          </div>
          <div
            id="seven"
            className="e-panel"
            data-row="0"
            data-col="0"
            data-sizex="5"
            data-sizey="2"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">
                <EP />
              </div>
            </div>
          </div>
          <div
            id="eight"
            className="e-panel"
            data-row="0"
            data-col="0"
            data-sizex="5"
            data-sizey="2"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">
                <EP />
              </div>
            </div>
          </div>
        </DashboardLayoutComponent>
      </div>
    </div>
  );
}

export default DashBoard;
