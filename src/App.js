import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";

import Dashboard from "./pages/Dashboard/Dashboard";
import Services from "./pages/serviceHome/Services/Services";

function App() {
  return (
    <>
      <div>
        <Router>
          <Sidebar>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard/services" element={<Services />} />
            </Routes>
          </Sidebar>
        </Router>
      </div>
      {/*<BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard/services" element={<Servicehome />} />
        </Routes>
      </BrowserRouter>*/}
    </>
  );
}
export default App;
