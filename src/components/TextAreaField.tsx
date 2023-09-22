import { clsx } from "clsx";
import {
  HtmlHTMLAttributes,
  RefObject,
  TextareaHTMLAttributes,
  forwardRef,
} from "react";
import { FormLabel } from "./FormLabel";
import { FormHelperText } from "./FormHelperText";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export interface TextAreaFieldProps
  extends Omit<HtmlHTMLAttributes<HTMLDivElement>, "children"> {
  textAreaProps?: TextareaProps;
  classNameLabel?: string;
  classNameHelperText?: string;
  label?: string;
  helperText?: string;
  required?: boolean;
  error?: boolean;
  textAreaRef?: RefObject<HTMLTextAreaElement>;
}

export const TextAreaField = forwardRef<HTMLDivElement, TextAreaFieldProps>(
  (props, ref) => {
    const {
      className,
      classNameLabel,
      classNameHelperText,
      textAreaProps = {},
      label,
      helperText,
      textAreaRef,
      required = false,
      error = false,
      ...other
    } = props;
    const { className: classNameInput, ...otherInput } = textAreaProps;
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
        <textarea
          ref={textAreaRef}
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
