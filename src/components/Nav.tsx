import reactLogo from "../assets/react.svg";
import { Link } from "react-router";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="logo">
        <img src={reactLogo} alt="Pixell River Logo" height="40" />
      </div>
      <div className="page-links">
        <Link to="/employees">Employees</Link>
        <Link to="/organization">Organization</Link>
      </div>
    </nav>
  );
}
