import { ReactNode, createContext, useState } from "react";
import { loginUser } from "../api";
import { toast } from "react-toastify";
import { LoginUserResponse, UserProfile } from "../api/types";

export interface UserContextProps {
  token: string | null;
  profile: UserProfile | null;
  isLogin: boolean;
  logining: boolean;
  login: (email: string, password: string) => void;
}

export const UserContext = createContext<UserContextProps>({
  token: null,
  profile: null,
  isLogin: false,
  logining: false,
  login: () => {},
});

export const UserProvider = (props: { children: ReactNode }) => {
  const [logining, setLogining] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const login = (email: string, password: string) => {
    if (logining) return;
    setLogining(true);
    loginUser(email, password)
      .badRequest(() => toast("Zły login lub hasło", { type: "error" }))
      .unauthorized(() => toast("Zły login lub hasło", { type: "error" }))
      .json((res: LoginUserResponse) => {
        const { token, user } = res;
        setToken(token);
        setProfile(user);
      })
      .finally(() => setLogining(false));
  };
  return (
    <UserContext.Provider
      value={{ logining, token, profile, isLogin: Boolean(profile), login }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
