import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Home/Home";
import Champions from "../Champions/Champions";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";

export default function App() {
  const apiKey = import.meta.env.VITE_RIOT_API_KEY;
  const location = useLocation();

  return (
    <div className="container-fluid m-0 p-0">
      <Routes location={location} key={location.pathname}>
        <Route path="/" index element={<Home />} />
        <Route path="/champions" index element={<Champions apiKey={apiKey} />} />
      </Routes>
    </div>
  );
}
