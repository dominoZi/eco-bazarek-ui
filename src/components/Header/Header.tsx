import { NavItem } from "./NavItem";

export const Header = () => {
  return (
    <header className="flex flex-row justify-center items-center h-[64px]">
      <ul className="flex flex-row">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about-us">O nas</NavItem>
        <NavItem to="/products">Produkty</NavItem>
        <NavItem to="/contact">Kontakt</NavItem>
      </ul>
    </header>
  );
};
