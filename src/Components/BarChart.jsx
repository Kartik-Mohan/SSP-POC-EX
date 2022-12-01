import React from "react";
import "../App.css";
import { MDBProgress, MDBProgressBar } from "mdb-react-ui-kit";
function BarChart() {
  return (
    <div id="barGraph">
      <h5 class="text-primary">In Progress and Completed Batches</h5>
      <div>
        <div class="d-flex justify-content-between" style={{ margin: "2px" }}>
          <div class="text-primary">APAC EOD Process</div>
          <div>
            <strong>6/43</strong>
          </div>
        </div>
        <MDBProgress>
          <MDBProgressBar
            bgColor="danger"
            width="30"
            valuemin={0}
            valuemax={100}
          />
        </MDBProgress>

        <div class="d-flex justify-content-between">
          <div>Start: 8:35 AM EST</div>
          <div> Status: Failed, Assigned</div>
        </div>
      </div>
      <br />
      <div>
        <div class="d-flex justify-content-between" style={{ margin: "2px" }}>
          <div class="text-primary">AMEA EOD Process</div>
          <div>
            <strong>0/53</strong>
          </div>
        </div>
        <MDBProgress>
          <MDBProgressBar bgColor="" width="0" valuemin={0} valuemax={100} />
        </MDBProgress>

        <div class="d-flex justify-content-between">
          <div> Status: Not Started</div>
        </div>
      </div>
      <br />
      <div>
        <div class="d-flex justify-content-between" style={{ margin: "2px" }}>
          <div class="text-primary">APAC BOD Process</div>
          <div>
            <strong>28/53</strong>
          </div>
        </div>
        <MDBProgress>
          <MDBProgressBar
            bgColor="success"
            width="60"
            valuemin={0}
            valuemax={100}
          />
        </MDBProgress>

        <div class="d-flex justify-content-between">
          <div>Start: 8:35 AM EST</div>
          <div> Status: In Process</div>
        </div>
      </div>
      <br />
      <div>
        <div class="d-flex justify-content-between" style={{ margin: "2px" }}>
          <div class="text-primary">LATAM EOD Process</div>
          <div>
            <strong>32/34</strong>
          </div>
        </div>
        <MDBProgress>
          <MDBProgressBar
            bgColor="warning"
            width="90"
            valuemin={0}
            valuemax={100}
          />
        </MDBProgress>

        <div class="d-flex justify-content-between">
          <div>Start: 7:35 AM EST</div>
          <div> Status: Late</div>
        </div>
      </div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <strong class="text-primary">View All Batches</strong>
      </div>
    </div>
  );
}

export default BarChart;
