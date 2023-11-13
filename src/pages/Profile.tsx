import { useState, useEffect } from "react";
import { User, getAuth } from "firebase/auth";

const Profile = () => {
  const [user, setUser] = useState<User>();

  const auth = getAuth();

  useEffect(() => {
    if (auth.currentUser) {
      setUser(auth.currentUser);
    }
  }, []);

  return user ? <h1>{user.displayName}</h1> : <p>Not Logged In</p>;
};

export default Profile;
