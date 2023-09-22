import { clsx } from "clsx";
import { HtmlHTMLAttributes, forwardRef } from "react";

export interface FormLabelProps
  extends Omit<HtmlHTMLAttributes<HTMLLabelElement>, "children"> {
  label: string;
  required?: boolean;
}

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  (props, ref) => {
    const { className, label, required = false, ...other } = props;
    return (
      <label
        ref={ref}
        className={clsx("block text-xs font-normal mb-1", className)}
        {...other}
      >
        {label}
        {required && "*"}
      </label>
    );
  }
);
