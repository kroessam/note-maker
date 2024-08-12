import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-center">
      <nav>
        <ul className="nav-links">
          <Link className="link" to="/">
            <li>Home</li>
          </Link>
          <Link className="link" to="/about">
            <li>About</li>
          </Link>
          <Link className="link" to="/sign-in">
            <li>Sign In</li>
          </Link>
          <Link className="link" to="/dashboard">
            <li>Dashboard</li>
          </Link>
          <Link className="link" to="/profile">
            <li>Profile</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
