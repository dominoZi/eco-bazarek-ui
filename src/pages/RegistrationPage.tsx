import { FormEvent, useState } from "react";
import { Button, Content, TextField } from "../components";
import { CreateUserProfile } from "../api/types";
import { InputProps } from "../components/TextField";

const getDefaultCreateUserProfile = (): CreateUserProfile => ({
  city: "",
  country: "",
  county: "",
  district: "",
  email: "",
  farmDesc: "",
  farmName: "",
  firstName: "",
  flatNumber: "",
  lastName: "",
  phone: "",
  postCode: "",
  street: "",
  streetNumber: "",
  voivodeship: "",
  password: "",
  repeatPassword: "",
});

export const RegistrationPage = () => {
  const [formData, setFormData] = useState<CreateUserProfile>(
    getDefaultCreateUserProfile
  );
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  const getFieldProps = (key: keyof CreateUserProfile): InputProps => ({
    name: key,
    value: formData[key],
    onChange: (e) =>
      setFormData((prev) => ({
        ...prev,
        [key]: e.target.value,
      })),
  });
  return (
    <Content title="Rejestracja">
      <form onSubmit={handleSubmit} noValidate>
        <div className="max-w-[620px] mb-10">
          <h1 className="uppercase">Rejestracja</h1>
          <div className="mt-7 grid grid-rows-3 grid-cols-2 gap-x-4 gap-y-6">
            <TextField
              label="Imie"
              required
              inputProps={{
                ...getFieldProps("firstName"),
              }}
            />
            <TextField
              label="Nazwisko"
              required
              inputProps={{
                ...getFieldProps("lastName"),
              }}
            />
            <TextField
              label="Email"
              inputProps={{ ...getFieldProps("email"), type: "email" }}
            />
            <TextField
              label="Telefon"
              inputProps={{ ...getFieldProps("phone"), type: "tel" }}
            />
            <TextField
              label="Hasło"
              inputProps={{ ...getFieldProps("password"), type: "password" }}
            />
            <TextField
              label="Powtórz hasło"
              inputProps={{
                ...getFieldProps("repeatPassword"),
                type: "password",
              }}
            />
          </div>
          <h3 className="my-9 uppercase">Adres i informacje o gospodarstwie</h3>
          <div className="mt-7 grid grid-rows-2 grid-cols-1 gap-x-4 gap-y-6">
            <TextField
              label="Nazwa gospodarstwa"
              inputProps={{ ...getFieldProps("farmName") }}
            />
            <TextField
              label="Opis gospodarstwa"
              inputProps={{ ...getFieldProps("farmDesc") }}
            />
          </div>
          <div className="mt-7 grid grid-rows-1 grid-cols-2 gap-x-4 gap-y-6">
            <TextField
              label="Ulica"
              inputProps={{ ...getFieldProps("street") }}
            />
            <div className="grid grid-rows-1 grid-cols-2 gap-x-4">
              <TextField
                label="Numer domu"
                inputProps={{ ...getFieldProps("streetNumber") }}
              />
              <TextField
                label="Numer mieszkania"
                inputProps={{ ...getFieldProps("flatNumber") }}
              />
            </div>
            <TextField
              label="Miast/Wieś"
              inputProps={{ ...getFieldProps("city") }}
            />
            <TextField
              label="Kod pocztowy"
              inputProps={{ ...getFieldProps("postCode") }}
            />
            <TextField
              label="Wojewóctwo"
              inputProps={{ name: "voivodeship" }}
            />
            <TextField
              label="Powiat"
              inputProps={{ ...getFieldProps("country") }}
            />
            <TextField
              label="Gmina"
              inputProps={{ ...getFieldProps("county") }}
            />
          </div>
          <div className="flex flex-row justify-end my-12">
            <Button variant="text" type="reset">
              Reset
            </Button>
            <Button type="submit">Zapisz</Button>
          </div>
        </div>
      </form>
    </Content>
  );
};
