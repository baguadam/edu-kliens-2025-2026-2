import { createContext } from "react";
import type { User } from "../hooks/useUserState";

interface UserContextType {
  user: User | null;
  login: (newUser: User) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);
