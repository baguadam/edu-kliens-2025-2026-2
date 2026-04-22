import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const useUser = () => {
  const userInfo = useContext(UserContext);

  if (!userInfo) {
    throw new Error("Context is undefined");
  }

  return userInfo;
};

export default useUser;
