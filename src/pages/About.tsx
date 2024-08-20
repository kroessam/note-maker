import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <main className="text-center">
        <h1>About</h1>
        <p>My name is Sam Kroes and I am a junior frontend web developer using React.</p>
        <Link className="btn" to="/">
          Back to Home
        </Link>
      </main>
    </>
  );
};

export default About;
