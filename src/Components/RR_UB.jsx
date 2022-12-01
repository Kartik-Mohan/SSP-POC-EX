import React from "react";

function RR_UB() {
  return (
    <div className="RR_UB_Box">
      <div id="RR_UB_RR">
        <h5 class="text-primary">Run Request</h5>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Request Name</th>
              <th scope="col">Status</th>
              <th scope="col">Begin Time</th>
              <th scope="col">Case Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" class="text-primary">
                4 BOP Jobs (Rerun)
              </th>
              <td>Level 1</td>
              <td>-</td>
              <td>0123456</td>
            </tr>
            <tr>
              <th scope="row" class="text-primary">
                Lorem Job (Rerun)
              </th>
              <td>Level 1</td>
              <td>-</td>
              <td>7890123</td>
            </tr>
            <tr>
              <th scope="row" class="text-primary">
                Run LATAM EOD Process
              </th>
              <td>Running</td>
              <td>3:01 PM EST</td>
              <td>4567890</td>
            </tr>
          </tbody>
          <p class="text-primary">View ALL 7 current request</p>
        </table>
      </div>
      <div id="RR_UB_RR">
        <h5 class="text-primary">Upcoming Batches</h5>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Batch</th>
              <th scope="col">Expected Begin</th>
              <th scope="col">Status</th>
              <th scope="col">Jobs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" class="text-primary">
                APAC Nightly Process
              </th>
              <td>7:30 PM EST</td>
              <td>Scheduled</td>
              <td>43</td>
            </tr>
            <tr>
              <th scope="row" class="text-primary">
                AMEA Nightly Process
              </th>
              <td>8:00 PM EST</td>
              <td>Scheduled</td>
              <td>33</td>
            </tr>
            <tr>
              <th scope="row" class="text-primary">
                LATAM Nightly Process
              </th>
              <td>9:30 PM EST</td>
              <td>Scheduled</td>
              <td>53</td>
            </tr>
          </tbody>
          <p class="text-primary">View All 4 Upcoming</p>
        </table>
      </div>
    </div>
  );
}

export default RR_UB;
