import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="Nav container-fluid text-white position-fixed top-0">
      <ul className="d-flex list-unstyled align-items-center justify-content-between w-25 h-100 px-2 text-uppercase fw-bold">
        <Link to="/">Home</Link>
        <Link to="/champions">Champions</Link>
      </ul>
    </div>
  );
}
