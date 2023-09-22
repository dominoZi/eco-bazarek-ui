import { useContext } from "react";
import { Content } from "../../components";
import { UserContext } from "../../contexts/UserContext";
import { ProfileSection, SigninSection } from "./components";

export const ProfilePage = () => {
  const { isLogin, logining, login } = useContext(UserContext);
  return (
    <Content className="mb-16" title="Profil uzytkownika" loading={logining}>
      {isLogin ? (
        <ProfileSection />
      ) : (
        <SigninSection
          login={async (email, password) => {
            login(email, password);
          }}
        />
      )}
    </Content>
  );
};
