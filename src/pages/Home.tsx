import { Link } from "react-router-dom";
import SignIn from "./SignIn";

const Home = () => {
  return (
    <>
      <main>
        <h1>Note Maker</h1>
        <div className="btn-box">
          <Link className="btn" to="/sign-up">Sign Up</Link>
          <Link className="btn" to="/sign-in">Sign In</Link>
        </div>
      </main>
    </>
  );
};

export default Home;
