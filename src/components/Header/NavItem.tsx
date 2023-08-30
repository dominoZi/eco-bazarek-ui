import clsx from "clsx";
import { LiHTMLAttributes } from "react";
import { NavLink, To } from "react-router-dom";

export interface NavItemProps extends LiHTMLAttributes<HTMLLIElement> {
  to: To;
}

export const NavItem = (props: NavItemProps) => {
  const { children, to, ...other } = props;
  return (
    <li className="px-6" {...other}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          clsx("text-sm", isActive ? "text-bazarek-yellow-main" : "text-white")
        }
      >
        {children}
      </NavLink>
    </li>
  );
};
