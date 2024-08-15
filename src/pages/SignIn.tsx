import { Link } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

const SignIn = () => {
  return (
    <>
      <main>
        <Link className="btn" to="/">
          Back to Home
        </Link>
        <h1>Sign In</h1>
        <SignInForm />
        <SignUpForm />
      </main>
    </>
  );
};

export default SignIn;
