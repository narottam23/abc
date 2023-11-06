import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import Servicehome from "./pages/Servicehome";

function App() {
  return (
    <>
      <div>
        <Router>
          <Sidebar>
            <Routes>
              <Route path="/dashboard/home" element={<Dashboard />} />
              <Route path="/dashboard/services" element={<Servicehome />} />
            </Routes>
          </Sidebar>
        </Router>
      </div>
    </>
  );
}
export default App;
