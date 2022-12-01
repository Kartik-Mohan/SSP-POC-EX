import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import "../App.css";

function Footer() {
  return (
    <div className="footer">
      <MDBFooter className="text-center" color="white" bgColor="dark">
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          for POC purpose only
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;
