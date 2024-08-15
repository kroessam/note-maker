import { Link } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import { useState } from "react";

const SignIn = () => {
  const [hasAccount, setHasAccount] = useState(true);

  return (
    <>
      <main>
        <Link className="btn" to="/">
          Back to Home
        </Link>
        <h1>Sign In</h1>
        {hasAccount ? <SignInForm /> : <SignUpForm />}
        <p
          className="txt-click"
          onClick={() => {
            setHasAccount(!hasAccount);
          }}
        >
          {hasAccount ? "Don't" : "Already"} have an Account?
        </p>
      </main>
    </>
  );
};

export default SignIn;
