import { useState } from "react";
import { Button, PasswordValidator, TextField } from "../../../components";
import { changePassowrd } from "../../../api";
import { toast } from "react-toastify";

export interface ChangePasswordProps {
  token: string | null;
}

export const ChangePassword = (props: ChangePasswordProps) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordRepeat, setNewPasswordRepeat] = useState("");
  const [passwordSame, setPasswordSame] = useState(true);
  const submit = async () => {
    try {
      await changePassowrd(props.token ?? "", currentPassword, newPassword);
      toast("Hasło zostało zmienione");
    } catch (err) {
      toast("Hasło zostało zmienione", { type: "error" });
    }
  };
  return (
    <div className="w-full max-w-[515px] pt-8">
      <TextField
        label="Stare hasło"
        className="mb-8"
        required
        inputProps={{
          value: currentPassword,
          onChange: (e) => setCurrentPassword(e.target.value),
          type: "password",
        }}
      />
      <TextField
        label="Nowe hasło"
        className="mb-8"
        required
        inputProps={{
          value: newPassword,
          onChange: (e) => setNewPassword(e.target.value),
          type: "password",
        }}
      />
      <TextField
        label="Powtórz hasło"
        className="mb-8"
        error={!passwordSame}
        helperText={!passwordSame ? "Hasła muszą być takie same" : ""}
        required
        inputProps={{
          value: newPasswordRepeat,
          onChange: (e) => {
            setNewPasswordRepeat(e.target.value);
            setPasswordSame(true);
          },
          onBlur: () => setPasswordSame(newPassword === newPasswordRepeat),
          type: "password",
        }}
      />
      <PasswordValidator password={newPassword} />
      <div className="flex flex-row justify-end mt-8 mb-8">
        <Button
          variant="contained"
          disabled={!passwordSame}
          onClick={() => {
            submit();
          }}
        >
          Zmień hasło
        </Button>
      </div>
    </div>
  );
};
