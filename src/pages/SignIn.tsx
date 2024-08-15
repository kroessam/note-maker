import { Link } from "react-router-dom";
import SignInForm from "../components/SignInForm";

const SignIn = () => {
  return (
    <>
      <main>
        <Link className="btn" to="/">
          Back to Home
        </Link>
        <h1>Sign In</h1>
        <SignInForm />
      </main>
    </>
  );
};

export default SignIn;
