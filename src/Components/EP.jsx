import React from "react";
import "../App.css";
import { MDBProgress, MDBProgressBar } from "mdb-react-ui-kit";
function EP() {
  return (
    <div id="EP">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">User Sessions</th>
            <th scope="col">HTTP Threads</th>
            <th scope="col">DB Connections</th>
            <th scope="col">JMS</th>
            <th scope="col">CPU (%)</th>
            <th scope="col">Memory (%)</th>
            <th scope="col">Disk</th>
            <th scope="col">Memory (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">🔴</th>
            <td class="text-primary">Scm-mt-1</td>
            <td class="text-danger">1 have</td>
            <td>0</td>
            <td>7</td>
            <td>0</td>
            <td> 🟢</td>
            <td>
              <MDBProgress>
                <MDBProgressBar
                  bgColor="success"
                  width="0"
                  valuemin={0}
                  valuemax={100}
                />
              </MDBProgress>
            </td>
            <td>
              <MDBProgress>
                <MDBProgressBar
                  bgColor="danger"
                  width="50"
                  valuemin={0}
                  valuemax={100}
                />
              </MDBProgress>
            </td>
            <td>7</td>
            <td>70</td>
          </tr>
          <tr>
            <th scope="row">⚠️</th>
            <td class="text-primary">Scm-mt-2</td>
            <td>2 Warnings</td>
            <td>0</td>
            <td>9</td>
            <td>0</td>
            <td>⚫</td>
            <td>
              <MDBProgress>
                <MDBProgressBar
                  bgColor="success"
                  width="0"
                  valuemin={0}
                  valuemax={100}
                />
              </MDBProgress>
            </td>
            <td>
              <MDBProgress>
                <MDBProgressBar
                  bgColor="primary"
                  width="60"
                  valuemin={0}
                  valuemax={100}
                />
              </MDBProgress>
            </td>
            <td>9</td>
            <td>9</td>
          </tr>
          <tr>
            <th scope="row">⚠️</th>
            <td class="text-primary">Scm-mt-3</td>
            <td>1 Warnings</td>
            <td>0</td>
            <td>4</td>
            <td>0</td>
            <td>🔘</td>
            <td>
              <MDBProgress>
                <MDBProgressBar
                  bgColor="success"
                  width="0"
                  valuemin={0}
                  valuemax={100}
                />
              </MDBProgress>
            </td>
            <td>
              <MDBProgress>
                <MDBProgressBar
                  bgColor="primary"
                  width="60"
                  valuemin={0}
                  valuemax={100}
                />
              </MDBProgress>
            </td>
            <td>4</td>
            <td>4</td>
          </tr>
          <tr>
            <th scope="row">🟢</th>
            <td class="text-primary">Scm-mt-4</td>
            <td>Good</td>
            <td>0</td>
            <td>5</td>
            <td>0</td>
            <td>🔴</td>
            <td>
              <MDBProgress>
                <MDBProgressBar
                  bgColor="success"
                  width="0"
                  valuemin={0}
                  valuemax={100}
                />
              </MDBProgress>
            </td>
            <td>
              <MDBProgress>
                <MDBProgressBar
                  bgColor="primary"
                  width="70"
                  valuemin={0}
                  valuemax={100}
                />
              </MDBProgress>
            </td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <th scope="row">🟢</th>
            <td class="text-primary">Scm-mt-5</td>
            <td>Good</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>🔘</td>
            <td>
              <MDBProgress>
                <MDBProgressBar
                  bgColor="success"
                  width="0"
                  valuemin={0}
                  valuemax={100}
                />
              </MDBProgress>
            </td>
            <td>
              <MDBProgress>
                <MDBProgressBar
                  bgColor="primary"
                  width="30"
                  valuemin={0}
                  valuemax={100}
                />
              </MDBProgress>
            </td>
            <td>5</td>
            <td>5</td>
          </tr>
          <tr>
            <th scope="row">🟢</th>
            <td class="text-primary">Scm-mt-6</td>
            <td>Good</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>🔘</td>
            <td>
              <MDBProgress>
                <MDBProgressBar
                  bgColor="success"
                  width="60"
                  valuemin={0}
                  valuemax={100}
                />
              </MDBProgress>
            </td>
            <td>
              <MDBProgress>
                <MDBProgressBar
                  bgColor="primary"
                  width="30"
                  valuemin={0}
                  valuemax={100}
                />
              </MDBProgress>
            </td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <th scope="row">🟢</th>
            <td class="text-primary">Scm-mt-7</td>
            <td>1 Warnings</td>
            <td>0</td>
            <td>4</td>
            <td>0</td>
            <td>🔘</td>
            <td>
              <MDBProgress>
                <MDBProgressBar
                  bgColor="success"
                  width="40"
                  valuemin={0}
                  valuemax={100}
                />
              </MDBProgress>
            </td>
            <td>
              <MDBProgress>
                <MDBProgressBar
                  bgColor="warning"
                  width="80"
                  valuemin={0}
                  valuemax={100}
                />
              </MDBProgress>
            </td>
            <td>4</td>
            <td>4</td>
          </tr>
          <tr>
            <th scope="row">⚠️</th>
            <td class="text-primary">Scm-mt-8</td>
            <td>Good</td>
            <td>0</td>
            <td>7</td>
            <td>0</td>
            <td>🔘</td>
            <td>
              <MDBProgress>
                <MDBProgressBar
                  bgColor="success"
                  width="30"
                  valuemin={0}
                  valuemax={100}
                />
              </MDBProgress>
            </td>
            <td>
              <MDBProgress>
                <MDBProgressBar
                  bgColor="primary"
                  width="40"
                  valuemin={0}
                  valuemax={100}
                />
              </MDBProgress>
            </td>
            <td>10</td>
            <td>10</td>
          </tr>
          <tr>
            <th scope="row">🟢</th>
            <td class="text-primary">Scm-mt-9</td>
            <td>Good</td>
            <td>12</td>
            <td>10</td>
            <td>12</td>
            <td>🔘</td>
            <td>
              <MDBProgress>
                <MDBProgressBar
                  bgColor="success"
                  width="80"
                  valuemin={0}
                  valuemax={100}
                />
              </MDBProgress>
            </td>
            <td>
              <MDBProgress>
                <MDBProgressBar
                  bgColor="primary"
                  width="60"
                  valuemin={0}
                  valuemax={100}
                />
              </MDBProgress>
            </td>
            <td>10</td>
            <td>10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EP;
