import { createContext } from "react";

interface UserContextData {
  name: string;
  token: string;
}

const UserContext = createContext<UserContextData>({
  name: "",
  token: "",
});

export default UserContext;
