import { useState } from "react";

export interface User {
  name: string;
  token: string;
}

const useUserState = () => {
  const [user, setUser] = useState<User | null>(null);
  const login = (newUser: User) => setUser(newUser);
  const logout = () => setUser(null);

  return { user, login, logout };
};

export default useUserState;
