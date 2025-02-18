import { fetchUser } from "./FetchUser";
import UserProfile from "./UserProfile";



const UserProfileWrapper = async () => {
  const user = await fetchUser(); // ✅ Fetch the user data here
  return <UserProfile user={user} />;
};

export default UserProfileWrapper;
