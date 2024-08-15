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
          <Link className="btn" to="/sign-in">
            Sign Up / Log In
          </Link>
          <Link className="btn" to="/dashboard">
            Continue as Guest
          </Link>
        </div>
        <hr />
        <section>
          <h2>About this Project</h2>
          <p>
            Note Maker is all about developing a simple note taking application
            using React and TypeScript.
          </p>
          <p>
            To learn more, you are welcome to browse the{" "}
            <a href="https://github.com/kroessam/note-maker">
              source code on Github
            </a>
            .
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
