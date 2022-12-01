import React from "react";
import "../App.css";
function CPI_Table() {
  return (
    <div id="CPI_Tables">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Status</th>
            <th scope="col">Job Name</th>
            <th scope="col">Issue</th>
            <th scope="col">Dependencies</th>
            <th scope="col">Case Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">🔴 Failed</th>
            <td class="text-primary">Apply Portia Price..</td>
            <td>
              <strong>Network Failure</strong>
            </td>
            <td>53</td>
            <td>1234567</td>
          </tr>
          <tr>
            <th scope="row">⚠️ Late</th>
            <td class="text-primary">Morning Portia Position...</td>
            <td>-</td>
            <td>28</td>
            <td>8901234</td>
          </tr>
          <tr>
            <th scope="row">⚠️ Late</th>
            <td class="text-primary">Run Important for ...</td>
            <td>-</td>
            <td>12</td>
            <td>9945234</td>
          </tr>
          <tr>
            <th scope="row">⚠️ Late</th>
            <td class="text-primary">Replay Ibor...</td>
            <td>-</td>
            <td>12</td>
            <td>4657234</td>
          </tr>
          <tr>
            <th scope="row">⚠️ Late</th>
            <td class="text-primary">ComputeStats...</td>
            <td>-</td>
            <td>11</td>
            <td>4356534</td>
          </tr>
          <tr>
            <th scope="row">⚠️ Late</th>
            <td class="text-primary">Post Transaction Resulting...</td>
            <td>-</td>
            <td>15</td>
            <td>3401234</td>
          </tr>
          <tr>
            <th scope="row">⚠️ Late</th>
            <td class="text-primary">Calc Position...</td>
            <td>-</td>
            <td>15</td>
            <td>3434234</td>
          </tr>
          <tr>
            <th scope="row">⚠️ Late</th>
            <td class="text-primary">Mapping Compute T+1...</td>
            <td>-</td>
            <td>9</td>
            <td>3455661</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CPI_Table;
