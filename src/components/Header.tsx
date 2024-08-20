import { Link } from "react-router-dom";

interface Props {
  displayName: string;
}

const Header = ({ displayName }: Props) => {
  let displayMessage = "";

  if (displayName !== "") {
    displayMessage = `Welcome, ${displayName}`;
  }

  return (
    <header className="text-center">
      <nav>
        <Link className="link" to="/">
          <img id="navbar-logo" src="/favicon-100.svg"></img>
        </Link>
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
        <p id="username">
          <Link className="link" to="/profile">{displayMessage}</Link></p>
      </nav>
    </header>
  );
};

export default Header;
