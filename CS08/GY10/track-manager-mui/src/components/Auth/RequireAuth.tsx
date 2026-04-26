import useUser from "../../hooks/useUser";

interface RequireAuthProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const RequireAuth = ({ children, fallback = null }: RequireAuthProps) => {
  const { user } = useUser();
  return user ? children : fallback;
};

export default RequireAuth;
