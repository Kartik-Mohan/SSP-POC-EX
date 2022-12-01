import React from "react";
import "../App.css";
function BatchProcessing() {
  return (
    <div className="BP">
      <h5>Batch Cycle Monitoring</h5>
      <div>
        <h6>
          <span class="text-primary">All Batch Cycles </span>/ SSGA APAC EOD
          Process 🔴 Status: Failed
        </h6>

        <div class="grid-BP">
          <div class="row">
            <div class="col-sm">
              <p>
                <b>Name: </b>SSGA APAC EOD Process
              </p>
              <p>
                <b>Client:</b> SSGA
              </p>
              <p>
                <b>Region:</b> APAC
              </p>
            </div>
            <div class="col-sm">
              <p>
                <b>Current Status:</b> <span class="text-danger">Failed</span>
              </p>
              <p>
                <b>Expected Start Time:</b> 10 AM EST 4/1/2022
              </p>
              <p>
                <b>Actual Start Time:</b> 10 AM EST 4/1/2022
              </p>
            </div>
            <div class="col-sm">
              <p>
                <b>Number Completed:</b> 2/3
              </p>
              <p>
                <b>Expected End Time:</b> 10 AM EST 4/1/2022
              </p>
              <p>
                <b>Actual End Time:</b>
              </p>
            </div>
            <div class="col-sm">
              <p>
                <b>Batch Code:</b> 123
              </p>
              <p>
                <b>Average Completion Time:</b> 10 AM EST 4/1/2022
              </p>
              <p>
                <b>SLA Completion Time:</b> 10 AM EST 4/1/2022
              </p>
            </div>
            <p>
              <b>Description:</b> Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Corrupti, illum dignissimos minima unde esse, ad
              qui quia a, harum nulla tempore. Officiis optio sunt soluta atque,
              totam consectetur, quaerat eos autem corporis molestias dolores?
            </p>
          </div>
        </div>
      </div>
      <br />
      <h5>Job Processing Issue</h5>
      <div class="grid-BP-B">
        <table class="table table-striped">
          <thead class="table table-bordered">
            <tr>
              <th scope="col"></th>
              <th scope="col">Job Name</th>
              <th scope="col">Status</th>
              <th scope="col">Expected Start</th>
              <th scope="col">Support Status</th>
              <th scope="col">Actual Start</th>
              <th scope="col">+/- Expected</th>
              <th scope="col">Expected Finish</th>
              <th scope="col">Actual Finish</th>
              <th scope="col">Dependencies</th>
              <th scope="col">Dependency Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th></th>
              <td class="text-primary">Morning Portia Position</td>
              <td>In Progress, Late</td>
              <td>04/01/2022 10:00 AM</td>
              <td>-</td>
              <td>04/01/2022 10:00 AM</td>
              <td>00:00:30</td>
              <td>04/01/2022 10:00 AM</td>
              <td>-</td>
              <td>10</td>
              <td>See Details</td>
            </tr>
            <tr>
              <th></th>
              <td class="text-primary">Morning Portia Position</td>
              <td class="text-primary">Failed</td>
              <td>04/01/2022 10:00 AM</td>
              <td>-</td>
              <td>04/01/2022 10:00 AM</td>
              <td>00:00:30</td>
              <td>04/01/2022 10:00 AM</td>
              <td>-</td>
              <td>10</td>
              <td>Hard</td>
            </tr>
            <tr>
              <th></th>
              <td class="text-primary">Morning Portia Position</td>
              <td>Hard Dependency</td>
              <td>04/01/2022 10:00 AM</td>
              <td>-</td>
              <td>04/01/2022 10:00 AM</td>
              <td>00:00:30</td>
              <td>04/01/2022 10:00 AM</td>
              <td>-</td>
              <td>10</td>
              <td>Hard</td>
            </tr>
            <tr>
              <th></th>
              <td class="text-primary">Morning Portia Position</td>
              <td>Hard Dependency</td>
              <td>04/01/2022 10:00 AM</td>
              <td>-</td>
              <td>04/01/2022 10:00 AM</td>
              <td>00:00:30</td>
              <td>04/01/2022 10:00 AM</td>
              <td>-</td>
              <td>10</td>
              <td>Hard</td>
            </tr>
            <tr>
              <th></th>
              <td class="text-primary">Morning Portia Position</td>
              <td>Hard Dependency</td>
              <td>04/01/2022 10:00 AM</td>
              <td>-</td>
              <td>04/01/2022 10:00 AM</td>
              <td>00:00:30</td>
              <td>04/01/2022 10:00 AM</td>
              <td>-</td>
              <td>10</td>
              <td>Hard</td>
            </tr>
            <tr>
              <th></th>
              <td class="text-primary">Morning Portia Position</td>
              <td>Hard Dependency</td>
              <td>04/01/2022 10:00 AM</td>
              <td>-</td>
              <td>04/01/2022 10:00 AM</td>
              <td>00:00:30</td>
              <td>04/01/2022 10:00 AM</td>
              <td>-</td>
              <td>10</td>
              <td>Hard</td>
            </tr>
            <tr>
              <th></th>
              <td class="text-primary">Morning Portia Position</td>
              <td>Hard Dependency</td>
              <td>04/01/2022 10:00 AM</td>
              <td>-</td>
              <td>04/01/2022 10:00 AM</td>
              <td>00:00:30</td>
              <td>04/01/2022 10:00 AM</td>
              <td>-</td>
              <td>10</td>
              <td>Hard</td>
            </tr>
            <tr>
              <th></th>
              <td class="text-primary">Morning Portia Position</td>
              <td>Hard Dependency</td>
              <td>04/01/2022 10:00 AM</td>
              <td>-</td>
              <td>04/01/2022 10:00 AM</td>
              <td>00:00:30</td>
              <td>04/01/2022 10:00 AM</td>
              <td>-</td>
              <td>10</td>
              <td>Hard</td>
            </tr>
            <tr>
              <th></th>
              <td class="text-primary">Morning Portia Position</td>
              <td>Hard Dependency</td>
              <td>04/01/2022 10:00 AM</td>
              <td>-</td>
              <td>04/01/2022 10:00 AM</td>
              <td>00:00:30</td>
              <td>04/01/2022 10:00 AM</td>
              <td>-</td>
              <td>10</td>
              <td>Hard</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BatchProcessing;
