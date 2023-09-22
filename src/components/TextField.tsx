import { clsx } from "clsx";
import {
  HtmlHTMLAttributes,
  InputHTMLAttributes,
  RefObject,
  forwardRef,
} from "react";
import { FormLabel } from "./FormLabel";
import { FormHelperText } from "./FormHelperText";

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
  inputRef?: RefObject<HTMLInputElement>;
}

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  (props, ref) => {
    const {
      className,
      classNameLabel,
      classNameHelperText,
      inputProps = {},
      label,
      helperText,
      inputRef,
      required = false,
      error = false,
      ...other
    } = props;
    const { className: classNameInput, ...otherInput } = inputProps;
    return (
      <div
        ref={ref}
        className={clsx(
          className,
          "flex flex-col font-black",
          error ? "text-red-600" : "text-black"
        )}
        {...other}
      >
        {label && (
          <FormLabel
            className={classNameLabel}
            label={label}
            required={required}
          />
        )}
        <input
          ref={inputRef}
          className={clsx(
            classNameInput,
            "block w-full min-h-[42px] px-2 focus:outline-none font-normal",
            error ? "bg-red-200 border-2 border-red-300" : "bg-white"
          )}
          required={required}
          {...otherInput}
        />
        {helperText && (
          <FormHelperText className={classNameHelperText}>
            {helperText}
          </FormHelperText>
        )}
      </div>
    );
  }
);
