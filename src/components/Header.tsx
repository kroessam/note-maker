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
        <p>{displayMessage}</p>
      </nav>
    </header>
  );
};

export default Header;
