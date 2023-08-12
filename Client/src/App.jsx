import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Insights from "./components/Insights/Insights";
import Dashboard from "./components/Dashboard.jsx/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Insights />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
