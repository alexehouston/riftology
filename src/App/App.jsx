import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";
import Champions from "../Champions/Champions";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css";
import "./App.css";

export default function App() {
  const location = useLocation();

  return (
    <div className="App container-fluid m-0 p-0">
      <Nav />
      <Routes location={location} key={location.pathname}>
        <Route path="/champions" element={<Champions />} />
      </Routes>

      <div className="bg position-absolute">
        <div className="bg-inner">
          <img className="bg-img w-100" src="/assets/bg.jpg" alt="Riftology" />
        </div>
      </div>
    </div>
  );
}
