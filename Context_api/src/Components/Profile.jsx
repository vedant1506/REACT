import { useContext } from "react";
import UserContext from "../Context/UserContext.js";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Please login to view your profile.</div>;
  }

  return (
    <div>
      Profile: {user.username}
      <p>Welcome to your profile page!</p>
    </div>
  );
}

export default Profile;
