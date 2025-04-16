import data from "./jobs.json";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Jobs from "./components/Jobs";
import Home from "./pages/Home";
import Job from "./components/Job";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs data={data} />} />
          <Route path="jobs/:title" element={<Job data={data} />} />
        </Route>
        ,
      </Routes>
    </>
  );
}

export default App;
