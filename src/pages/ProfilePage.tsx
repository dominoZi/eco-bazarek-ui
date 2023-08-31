import { useContext, useState } from "react";
import { Button, Content, TextField } from "../components";
import { UserContext } from "../contexts/UserContext";

export const ProfilePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLogin, logining, login } = useContext(UserContext);
  return (
    <Content title="Profil uzytkownika" loading={logining}>
      {isLogin ? (
        <h1>Jesteś zalogowany</h1>
      ) : (
        <>
          Zaloguj się
          <TextField
            className="mt-4"
            inputProps={{
              type: "email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
            }}
          />
          <TextField
            className="mt-4"
            inputProps={{
              type: "password",
              value: password,
              onChange: (e) => setPassword(e.target.value),
            }}
          />
          <div className="mt-4">
            <Button className="mr-4" variant="text">
              Zarejestruj się
            </Button>
            <Button onClick={async () => await login(email, password)}>
              Zaloguj się
            </Button>
          </div>
        </>
      )}
    </Content>
  );
};
