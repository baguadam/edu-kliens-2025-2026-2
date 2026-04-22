import { createContext } from "react";
import type { User } from "../hooks/useUserState";

interface UserContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export default UserContext;
