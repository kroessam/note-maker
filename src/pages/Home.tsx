import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <div className="text-center">
          <h1>Note Maker</h1>
          <p>
            Welcome to Note Maker! Please sign in or sign up below to continue!
            If you would like to preview Note Maker without saving any data,
            select 'Continue as Guest'.
          </p>
        </div>
        <div className="btn-box">
          <Link className="btn" to="/sign-up">
            Sign Up
          </Link>
          <Link className="btn" to="/sign-in">
            Sign In
          </Link>
        </div>
        <div className="btn-box">
          <Link className="btn" to="/dashboard">
            Continue as Guest
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
