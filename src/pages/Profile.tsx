import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <main className="text-center">
        <h1>Profile</h1>
        <Link className="btn" to="/">
          Back to Home
        </Link>
      </main>
    </>
  );
};

export default Profile;
