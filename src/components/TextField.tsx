import clsx from "clsx";
import { HtmlHTMLAttributes, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextFieldProps
  extends Omit<HtmlHTMLAttributes<HTMLDivElement>, "children"> {
  inputProps?: InputProps;
  classNameLabel?: string;
  classNameHelperText?: string;
  label?: string;
  helperText?: string;
  required?: boolean;
  error?: boolean;
}

export const TextField = (props: TextFieldProps) => {
  const {
    className,
    classNameLabel,
    classNameHelperText,
    inputProps = {},
    label,
    helperText,
    required = false,
    error = false,
    ...other
  } = props;
  const { className: classNameInput, ...otherInput } = inputProps;
  return (
    <div
      className={clsx(
        className,
        "flex flex-col font-black",
        error ? "text-red-600" : "text-black"
      )}
      {...other}
    >
      {label && (
        <label
          className={clsx("block text-xs font-normal mb-1", classNameLabel)}
        >
          {label}
          {required && "*"}
        </label>
      )}
      <input
        className={clsx(
          classNameInput,
          "block w-full min-h-[42px] px-2 focus:outline-none font-normal",
          error ? "bg-red-200 border-2 border-red-300" : "bg-white"
        )}
        required={required}
        {...otherInput}
      />
      {helperText && (
        <span
          className={clsx(
            "block text-xs font-normal mt-1",
            classNameHelperText
          )}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};
