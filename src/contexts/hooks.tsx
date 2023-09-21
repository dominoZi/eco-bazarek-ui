import { useContext } from "react";
import { UserContext } from "./UserContext";

export const useUserProfile = () => {
  return useContext(UserContext);
};
