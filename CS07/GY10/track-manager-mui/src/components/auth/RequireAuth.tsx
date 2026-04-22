import type React from "react";
import useUser from "../../hooks/useUser";

interface RequireAuthProps {
  children: React.ReactNode;
}

const RequireAuth = ({ children }: RequireAuthProps) => {
  const { user } = useUser();
  return user ? children : <p>You must be logged in!</p>;
};

export default RequireAuth;
