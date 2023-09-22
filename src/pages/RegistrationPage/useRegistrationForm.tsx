import { FormEvent, useEffect, useState } from "react";
import { CreateUserProfile } from "../../api/types";
import { getDefaultCreateUserProfile } from "./utils";
import { InputProps } from "../../components/TextField";
import { TextareaProps } from "../../components/TextAreaField";
import { createUserAxios } from "../../api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useUserProfile } from "../../contexts/hooks";
import { useNavigate } from "react-router-dom";

export const useRegistrationForm = () => {
  const navigate = useNavigate();
  const { token, setUserProfile } = useUserProfile();
  const [formData, setFormData] = useState<CreateUserProfile>(
    getDefaultCreateUserProfile
  );
  useEffect(() => {
    if (token) navigate("/profile");
  }, [token, navigate]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (0 < Object.keys(errors).length) {
      toast("Wypełnij wszystkie pola poprawnie", { type: "error" });
    }
    try {
      const { data } = await createUserAxios(formData);
      setUserProfile(data.token, data.user);
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
