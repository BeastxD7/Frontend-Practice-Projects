import { fetchUser } from "./FetchUser";
import UserProfile from "./UserProfile";

interface User {
  name: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
}

const UserProfileWrapper = async () => {
  const user = await fetchUser() as User; 
  return <UserProfile user={user} />;
};

export default UserProfileWrapper;
