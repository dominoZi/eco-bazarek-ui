import { ReactNode, createContext, useEffect, useState } from "react";
import { getUserByToken, loginUser } from "../api";
import { toast } from "react-toastify";
import { LoginUserResponse, UserProfile } from "../api/types";

const TokenStorageKey = "bazarek-token";
const ProfileStorageKey = "bazarek-profile";

export interface UserContextProps {
  loading: boolean;
  token: string | null;
  profile: UserProfile | null;
  isLogin: boolean;
  logining: boolean;
  login: (email: string, password: string) => void;
  setUserProfile: (token: string, profile: UserProfile) => void;
}

export const UserContext = createContext<UserContextProps>({
  loading: false,
  token: null,
  profile: null,
  isLogin: false,
  logining: false,
  login: () => {},
  setUserProfile: () => {},
});

export const UserProvider = (props: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [logining, setLogining] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const setUserProfile = (token: string, profile: UserProfile) => {
    setProfile(profile);
    setToken(token);
    if (token && profile) {
      localStorage.setItem(TokenStorageKey, token);
      localStorage.setItem(ProfileStorageKey, JSON.stringify(profile));
    } else {
      localStorage.setItem(TokenStorageKey, "");
      localStorage.setItem(ProfileStorageKey, "");
    }
  };
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
        setUserProfile(token, user);
      })
      .finally(() => setLogining(false));
  };
  useEffect(() => {
    const profileData = localStorage.getItem(ProfileStorageKey);
    const profile = profileData
      ? (JSON.parse(profileData) as UserProfile)
      : null;
    const token = localStorage.getItem(TokenStorageKey);
    if (token && profile) {
      setProfile(profile);
      setToken(token);
      setLoading(true);
      getUserByToken(token)
        .then(({ data }) => {
          setUserProfile(token, data);
        })
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        loading,
        logining,
        token,
        profile,
        isLogin: Boolean(profile),
        login,
        setUserProfile,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
