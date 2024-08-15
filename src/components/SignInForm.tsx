const SignInForm = () => {
  return (
    <form id="form-sign-in">
      <div>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" name="username" />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" name="password" />
      </div>
      <div>
        <button className="btn">Sign In</button>
      </div>
    </form>
  );
};

export default SignInForm;
