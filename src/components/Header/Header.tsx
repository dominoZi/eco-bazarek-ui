import "./Header.style.css";
import { Logo } from "./Logo";
import { HeaderMenu } from "./HeaderMenu";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className="Header-root">
      <Logo />
      <Navigation />
      <HeaderMenu />
    </header>
  );
};
