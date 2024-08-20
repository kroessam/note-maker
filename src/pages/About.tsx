import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <main className="text-center">
        <h1>About</h1>
        <Link className="btn" to="/">
          Back to Home
        </Link>
      </main>
    </>
  );
};

export default About;
