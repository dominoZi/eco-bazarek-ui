import { FormEvent, useState } from "react";
import { CreateUserProfile } from "../../api/types";
import { getDefaultCreateUserProfile } from "./utils";
import { InputProps } from "../../components/TextField";
import { TextareaProps } from "../../components/TextAreaField";
import { createUserAxios } from "../../api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

export const useRegistrationForm = () => {
  const [formData, setFormData] = useState<CreateUserProfile>(
    getDefaultCreateUserProfile
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (0 < Object.keys(errors).length) {
      toast("Wypełnij wszystkie pola poprawnie", { type: "error" });
    }
    // createUser(formData)
    //   .badRequest((err) => {
    //     const response = err.text
    //       ? (JSON.parse(err.text) as {
    //           inner: { path: string; message: string }[];
    //         })
    //       : null;
    //     if (response) {
    //       setErrors(
    //         response.inner.reduce<{ [key: string]: string }>((prev, curr) => {
    //           prev[curr.path] = curr.message;
    //           return prev;
    //         }, {})
    //       );
    //     }
    //   })
    //   .res();
    try {
      const { data } = await createUserAxios(formData);
      //data - response jeśli status 2XX
      console.log(data);
    } catch (err) {
      const error = err as AxiosError<{
        inner: { path: string; message: string }[];
      }>;
      if (error.status === 400) {
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
    key: keyof CreateUserProfile
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
    onBlur: (e) => {
      if (key === "repeatPassword") {
        const value = e.target.value;
        if (value !== formData.password)
          setErrors((prev) => {
            prev[key] = "Hasła muszą być takie same";
            return { ...prev };
          });
      }
    },
  });
  const reset = () => {
    setFormData(getDefaultCreateUserProfile);
  };
  const getError = (key: keyof CreateUserProfile) => errors[key];
  const getTextFieldProps = (key: keyof CreateUserProfile) => {
    const error = getError(key);
    return {
      helperText: error,
      error: Boolean(error),
    };
  };
  const isValid = Object.keys(errors).length === 0;
  return {
    isValid,
    errors,
    formData,
    getFieldProps,
    getTextFieldProps,
    getError,
    submit,
    reset,
  };
};
