import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const useUser = () => {
  const userData = useContext(UserContext);

  if (!userData) {
    throw new Error("Context is not used in a Provider");
  }

  return userData;
};

export default useUser;
