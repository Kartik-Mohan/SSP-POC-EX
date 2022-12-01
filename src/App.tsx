import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Gantt from "./Components/Gantt";
import Chart1 from "./Components/Chart1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import BarChart from "./Components/BarChart";
import CPI_Table from "./Components/CPI_Table";
import RR_UB from "./Components/RR_UB";
import EP from "./Components/EP";
import BatchProcessing from "./Components/BatchProcessing";
import DashBoard from "./Components/DashBoard";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/batchProcessing" element={<Gantt />} />
          <Route path="/" element={<Chart1 />} />
          <Route path="/bar" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
