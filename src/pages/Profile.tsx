import { Link } from "react-router-dom";

interface Props {
  displayName: string;
}

const Profile = ({ displayName }: Props) => {
  return (
    <>
      <main className="text-center">
        <h1>Profile</h1>
        <div className="profile-box">
          <div id="profile-img-placeholder"></div>
          <div>
            <h2>{displayName}</h2>
            <p>Sample</p>
            <p>Sample</p>
            <p>Sample</p>
          </div>
        </div>
        <Link className="btn" to="/">
          Back to Home
        </Link>
      </main>
    </>
  );
};

export default Profile;
