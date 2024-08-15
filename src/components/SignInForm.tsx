import { Link } from "react-router-dom";

const SignInForm = () => {
  return (
    <form id="form-sign-in">
      <div className="input-group">
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" name="username" />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" name="password" />
      </div>
      <div>
        <Link to="/dashboard">
          <button className="btn">Sign In</button>
        </Link>
      </div>
    </form>
  );
};

export default SignInForm;
