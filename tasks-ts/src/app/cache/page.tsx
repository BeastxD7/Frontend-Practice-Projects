"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { cache } from "react";

// @ts-expect-error: Ignoring type issue for cache function
export const fetchUserProfile = cache(async (): Promise<{ data; timestamp: string; error?: string }> => {
  try {
    console.log("Fetching new user profile...");
    const response = await axios.get( "http://localhost:3000/api/profile"); 
    return { data: response.data, timestamp: new Date().toLocaleTimeString() }; // Store timestamp
  } catch (error) {
    console.error("Error fetching profile:", error);
    return { data: null, error: "Failed to fetch profile", timestamp: new Date().toLocaleTimeString() };
  }
});

const UserProfile = () => {
  const [profile, setProfile] = useState<{ data?: { name?: string; email?: string }; timestamp?: string; error?: string }>({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetchUserProfile().then((result) => {
      setProfile(result);
      setLoading(false);
    });
  }, []);


  const handleManualRefresh = async () => {
    setLoading(true);
    const newData = await fetchUserProfile(); // Fetch fresh data
    setProfile(newData); // Update state with new data
    setLoading(false);
  };

  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <div className="bg-gray-800 shadow-lg rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">User Profile</h2>

        {loading ? (
          <p className="text-gray-500 text-center">Loading...</p>
        ) : profile.error ? (
          <p className="text-red-500 text-center">{profile.error}</p>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-lg"><strong>Name:</strong> {profile.data?.name}</p>
              <p className="text-lg"><strong>Email:</strong> {profile.data?.email}</p>
              <p className="text-gray-500 text-sm mt-2">Cached at: {profile.timestamp}</p>
            </div>

            <button
              onClick={handleManualRefresh}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition"
            >
              🔄 Refresh Profile
            </button>

            
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
