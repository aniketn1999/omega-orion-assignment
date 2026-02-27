import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import People from "./components/People";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/people" replace />} />

          <Route
            path="/home"
            element={<div className="p-8">Home Component</div>}
          />
          <Route path="/people" element={<People />} />
          <Route
            path="/team-management"
            element={<div className="p-8">Team Management </div>}
          />
          <Route
            path="/project-setup"
            element={<div className="p-8">Project Setup </div>}
          />
          <Route path="/hiring" element={<div className="p-8">Hiring </div>} />
          <Route path="/report" element={<div className="p-8">Report </div>} />
          <Route path="/myinfo" element={<div className="p-8">MyInfo </div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
