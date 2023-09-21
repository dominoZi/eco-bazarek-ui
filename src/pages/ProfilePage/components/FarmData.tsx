import { FormEvent, useState } from "react";
import { UserProfile } from "../../../api/types";
import { Button, TextAreaField, TextField } from "../../../components";
import { toast } from "react-toastify";
import { InputProps } from "../../../components/TextField";
import { TextareaProps } from "../../../components/TextAreaField";
import { updateUserAxios } from "../../../api";
import { AxiosError } from "axios";

export interface FarmDataProps {
  user: UserProfile;
  token: string | null;
  updateUser: (data: UserProfile) => void;
}

export const FarmData = (props: FarmDataProps) => {
  const [formData, setFormData] = useState<UserProfile>(() =>
    structuredClone(props.user)
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (0 < Object.keys(errors).length) {
      toast("Wypełnij wszystkie pola poprawnie", { type: "error" });
    }
    try {
      await updateUserAxios(formData, props.token ?? "");
      props.updateUser(structuredClone(formData));
      toast("Profil został zaktualizowany poprawnie");
    } catch (err) {
      const error = err as AxiosError<{
        inner: { path: string; message: string }[];
      }>;

      if (error.response?.status === 400) {
        const validationErros = error.response?.data;
        if (validationErros)
          setErrors(
            validationErros.inner.reduce<{ [key: string]: string }>(
              (prev, curr) => {
                prev[curr.path] = curr.message;
                return prev;
              },
              {}
            )
          );
      }
    }
  };
  const getFieldProps = (
    key: keyof UserProfile
  ): InputProps & TextareaProps => ({
    name: key,
    value: formData[key],
    onChange: (e) => {
      setErrors((prev) => {
        const next = structuredClone(prev);
        delete next[key];
        return next;
      });
      setFormData((prev) => ({
        ...prev,
        [key]: e.target.value,
      }));
    },
  });
  const reset = () => {
    setFormData(structuredClone(props.user));
  };
  const getError = (key: keyof UserProfile) => errors[key];
  const getTextFieldProps = (key: keyof UserProfile) => {
    const error = getError(key);
    return {
      helperText: error,
      error: Boolean(error),
    };
  };
  return (
    <form onSubmit={submit} onReset={reset} noValidate>
      <div className="max-w-[620px] mb-10">
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
            inputProps={{ ...getFieldProps("voivodeship") }}
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
  );
};
