import { useContext } from "react";
import { UserContext } from "./UserContext";
import { ResourcesContext, ResourcesContextProps } from "./ResourcesContext";

export const useUserProfile = () => {
  return useContext(UserContext);
};

export const useResources = () =>
  useContext<ResourcesContextProps>(ResourcesContext);
