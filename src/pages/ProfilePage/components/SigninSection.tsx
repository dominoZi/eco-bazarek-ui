import { useNavigate } from "react-router-dom";
import { Button, TextField } from "../../../components";
import { useState } from "react";

export interface SigninSectionProps {
  login: (email: string, password: string) => void;
}

export const SigninSection = ({ login }: SigninSectionProps) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="max-w-[620px]">
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
        <Button onClick={async () => login(email, password)}>
          Zaloguj się
        </Button>
      </div>
    </div>
  );
};
