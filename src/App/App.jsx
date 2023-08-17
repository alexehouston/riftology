import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Home/Home";
import Champions from "../Champions/Champions";
import "./App.css";

export default function App() {
  const apiKey = import.meta.env.VITE_RIOT_API_KEY;
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" index element={<Home />} />
        <Route path="/champions" index element={<Champions apiKey={apiKey} />} />
      </Routes>
    </>
  );
}
