import { useContext, useState } from "react";
import { Button, Content, TextField } from "../components";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export const ProfilePage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const { isLogin, logining, login } = useContext(UserContext);
  return (
    <Content title="Profil uzytkownika" loading={logining}>
      {isLogin ? (
        <h1 className="uppercase">Jesteś zalogowany</h1>
      ) : (
        <div className="max-w-[620px] mb-16">
          <h1 className="mb-8">Zaloguj się</h1>
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
          <div className="flex flex-row justify-end mt-8 ">
            <Button
              className="mr-4"
              variant="text"
              onClick={() => navigate("/registration")}
            >
              Zarejestruj się
            </Button>
            <Button onClick={async () => await login(email, password)}>
              Zaloguj się
            </Button>
          </div>
        </div>
      )}
    </Content>
  );
};
