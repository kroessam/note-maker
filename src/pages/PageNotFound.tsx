import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <main className="text-center">
        <h1>404 | Page Not Found</h1>
        <Link className="btn" to="/">
          Back to Home
        </Link>
      </main>
    </>
  );
};

export default PageNotFound;
