import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <form id="form-sign-up">
      <div className="input-group">
        <label htmlFor="firstName">First Name: </label>
        <input type="text" id="firstName" name="firstName" />
      </div>
      <div className="input-group">
        <label htmlFor="lastName">Last Name: </label>
        <input type="text" id="lastName" name="lastName" />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" name="email" />
      </div>
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
          <button className="btn">Create Account</button>
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
