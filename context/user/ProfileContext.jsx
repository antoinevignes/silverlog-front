/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { apiFetch } from "../../api/api";

const ProfileContext = createContext();

export default function ProfileProvider({ children }) {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const [username, setUsername] = useState(user?.username);
  const [email, setEmail] = useState(user?.email);
  const [bio, setBio] = useState(user?.bio);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const saveNewProfile = async () => {
    if (!email || !username) {
      throw new Error("Email et pseudo sont requis");
    }
    setIsLoading(true);

    try {
      const data = await apiFetch("/user/edit", {
        method: "POST",
        body: JSON.stringify({ username, email, bio, firstName, lastName }),
      });

      localStorage.setItem("user", JSON.stringify(data.user));

      setUsername(data.user.username);
      setEmail(data.user.email);
      setBio(data.user.bio);
      setFirstName(data.user.firstName);
      setLastName(data.user.lastName);
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        username,
        setUsername,
        email,
        setEmail,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        bio,
        setBio,
        saveNewProfile,
        isLoading,
        error,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within an ProfileProvider");
  }

  return context;
};
