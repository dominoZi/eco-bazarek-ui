import { useDeferredValue } from "react";
import {
  Button,
  Content,
  PasswordValidator,
  TextAreaField,
  TextField,
} from "../../components";
import { useRegistrationForm } from "./useRegistrationForm";

export const RegistrationPage = () => {
  const { formData, submit, getFieldProps, getTextFieldProps, reset } =
    useRegistrationForm();
  const password = useDeferredValue(formData.password);
  return (
    <Content title="Rejestracja">
      <form onSubmit={submit} onReset={reset} noValidate>
        <div className="max-w-[620px] mb-10">
          <h1 className="uppercase">Rejestracja</h1>
          <div className="mt-7 grid grid-rows-3 grid-cols-2 gap-x-4 gap-y-6">
            <TextField
              label="Imie"
              required
              {...getTextFieldProps("firstName")}
              inputProps={{
                ...getFieldProps("firstName"),
              }}
            />
            <TextField
              label="Nazwisko"
              required
              {...getTextFieldProps("lastName")}
              inputProps={{
                ...getFieldProps("lastName"),
              }}
            />
            <TextField
              label="Email"
              required
              {...getTextFieldProps("email")}
              inputProps={{ ...getFieldProps("email"), type: "email" }}
            />
            <TextField
              label="Telefon"
              required
              {...getTextFieldProps("phone")}
              inputProps={{ ...getFieldProps("phone"), type: "tel" }}
            />
            <TextField
              label="Hasło"
              required
              {...getTextFieldProps("password")}
              inputProps={{ ...getFieldProps("password"), type: "password" }}
            />
            <TextField
              label="Powtórz hasło"
              required
              {...getTextFieldProps("repeatPassword")}
              inputProps={{
                ...getFieldProps("repeatPassword"),
                type: "password",
              }}
            />
            <PasswordValidator password={password} />
          </div>
          <h3 className="my-9 uppercase">Adres i informacje o gospodarstwie</h3>
          <TextField
            className="mb-8"
            label="Nazwa gospodarstwa"
            required
            {...getTextFieldProps("farmName")}
            inputProps={{ ...getFieldProps("farmName") }}
          />
          <TextAreaField
            label="Opis gospodarstwa"
            {...getTextFieldProps("farmDesc")}
            textAreaProps={{
              rows: 4,
              className: "resize-y",
              ...getFieldProps("farmDesc"),
            }}
          />
          <div className="mt-7 grid grid-rows-1 grid-cols-2 gap-x-4 gap-y-6">
            <TextField
              label="Ulica"
              required
              {...getTextFieldProps("street")}
              inputProps={{ ...getFieldProps("street") }}
            />
            <div className="grid grid-rows-1 grid-cols-2 gap-x-4">
              <TextField
                label="Numer domu"
                required
                {...getTextFieldProps("streetNumber")}
                inputProps={{ ...getFieldProps("streetNumber") }}
              />
              <TextField
                label="Numer mieszkania"
                {...getTextFieldProps("flatNumber")}
                inputProps={{ ...getFieldProps("flatNumber") }}
              />
            </div>
            <TextField
              label="Miast/Wieś"
              required
              {...getTextFieldProps("city")}
              inputProps={{ ...getFieldProps("city") }}
            />
            <TextField
              label="Kod pocztowy"
              required
              {...getTextFieldProps("postCode")}
              inputProps={{ ...getFieldProps("postCode") }}
            />
            <TextField
              label="Wojewóctwo"
              required
              {...getTextFieldProps("voivodeship")}
              inputProps={{ name: "voivodeship" }}
            />
            <TextField
              label="Powiat"
              required
              {...getTextFieldProps("country")}
              inputProps={{ ...getFieldProps("country") }}
            />
            <TextField
              label="Gmina"
              required
              {...getTextFieldProps("county")}
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
