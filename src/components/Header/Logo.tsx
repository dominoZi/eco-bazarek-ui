import { Link } from "react-router-dom";
import logoUrl from "../../assets/logo-main.png";

export const Logo = () => {
  return (
    <Link className="flex flex-row items-center text-white mx-2" to="/">
      <img src={logoUrl} alt="logo" />
      <span className="ml-2">EcoBazarek</span>
    </Link>
  );
};
