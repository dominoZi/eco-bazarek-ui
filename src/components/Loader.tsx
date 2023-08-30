import clsx from "clsx";
import { HtmlHTMLAttributes } from "react";

export const Loader = ({
  className,
  ...other
}: Omit<HtmlHTMLAttributes<HTMLSpanElement>, "children">) => (
  <span className={clsx(className, "Loader-root")} {...other} />
);
