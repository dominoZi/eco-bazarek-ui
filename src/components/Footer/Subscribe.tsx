import { useState } from "react";
import { Button, TextField } from "..";
import { subscibe } from "../../api";
import { toast } from "react-toastify";

export const Subscribe = () => {
  const [subscribing, setSubscribing] = useState(false);
  const [email, setEmail] = useState("");
  const handleSubscribe = () => {
    if (email) {
      setSubscribing(true);
      subscibe(email)
        .badRequest(() => toast("Niepoprawny email", { type: "error" }))
        .res(
          () => () => toast("Dziękujemy za subskrybcję", { type: "success" })
        )
        .finally(() => setSubscribing(false));
    } else toast("Wprowadź email", { type: "info" });
  };
  return (
    <div className="flex flex-row mt-6">
      <TextField
        inputProps={{ value: email, onChange: (e) => setEmail(e.target.value) }}
        className="w-[420px] mr-4"
      />
      <Button disabled={subscribing} onClick={handleSubscribe}>
        Subskrybuj
      </Button>
    </div>
  );
};
