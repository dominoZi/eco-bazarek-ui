import clsx from "clsx";
import { HtmlHTMLAttributes } from "react";
import "./Button.styles.css";

export interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  variant?: "contained" | "text" | "icon";
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    disabled,
    children,
    variant = "contained",
    ...other
  } = props;
  return (
    <button
      className={clsx(
        className,
        "Button-root",
        variant,
        disabled && "disabled"
      )}
      {...other}
    >
      {children}
    </button>
  );
};
