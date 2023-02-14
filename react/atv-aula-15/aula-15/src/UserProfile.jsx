import { useEffect, useState } from "react";
import getUsers from "./components/user.service";
import UserDetails from "./components/UserDetails";
import UserStatistics from "./components/UserStatistics";

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const userResp = await getUsers(userId);
      setUser(userResp);
    };
    fetchUser();
  }, [userId]);

  return (
    <div>
      <h1>User Profile</h1>
      <UserDetails user={user} />
      <UserStatistics user={user} />
    </div>
  );
};

export default UserProfile;
