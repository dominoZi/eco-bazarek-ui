import { HtmlHTMLAttributes } from "react";

export interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  variant?: "contained" | "text";
}

export const Button = (props: ButtonProps) => {
  const { className, children, ...other } = props;
  return (
    <button className={className} {...other}>
      {children}
    </button>
  );
};
