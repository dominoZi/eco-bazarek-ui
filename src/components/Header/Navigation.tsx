import { NavItem } from "./NavItem";

export const Navigation = () => (
  <ul className="flex flex-row absolute left-2/4 translate-x-[-50%]">
    <NavItem to="/">Home</NavItem>
    <NavItem to="/about-us">O nas</NavItem>
    <NavItem to="/products">Produkty</NavItem>
    <NavItem to="/contact">Kontakt</NavItem>
  </ul>
);
