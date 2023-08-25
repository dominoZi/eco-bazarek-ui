import { LiHTMLAttributes } from "react";
import { NavLink, To } from "react-router-dom";

export interface NavItemProps extends LiHTMLAttributes<HTMLLIElement> {
  to: To;
}

export const NavItem = (props: NavItemProps) => {
  const { children, to, ...other } = props;
  return (
    <li className="px-4" {...other}>
      <NavLink to={to}>{children}</NavLink>
    </li>
  );
};
