import { EnvelopeOpenIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import socialSprits from "../../assets/social-spirits.png";
import { Subscribe } from "./Subscribe";

export const Footer = () => {
  return (
    <footer className="flex flex-row items-end justify-center w-full min-h-[514px] bg-bazarek-brown-dark text-white p-4">
      <section className=" flex flex-col items-center w-[1045px]">
        <EnvelopeOpenIcon className="w-[80px] stroke-[1px]" />
        <span className="mt-6 text-2xl uppercase">Subskrybuj</span>
        <p className="mt-4">
          Bądź pierwszym, który się dowie o naszych nowych produktach
        </p>
        <Subscribe />
        <nav className="flex flex-row items-center h-[42px] mt-6">
          <ul className="flex flex-row">
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <img
                  className="w-[36px] h-[36px] mx-3 object-cover"
                  style={{ objectPosition: 0 }}
                  src={socialSprits}
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <img
                  className="w-[36px] h-[36px] mx-3 object-cover"
                  style={{ objectPosition: "-36px 0" }}
                  src={socialSprits}
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <img
                  className="w-[36px] h-[36px] mx-3 object-cover"
                  style={{ objectPosition: "-72px 0" }}
                  src={socialSprits}
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <img
                  className="w-[36px] h-[36px] mx-3 object-cover"
                  style={{ objectPosition: "-108px 0" }}
                  src={socialSprits}
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <img
                  className="w-[36px] h-[36px] mx-3 object-cover"
                  style={{ objectPosition: "-152px 0" }}
                  src={socialSprits}
                />
              </a>
            </li>
          </ul>
        </nav>
        <nav className="flex flex-row items-center justify-center w-full h-[64px] mt-2 border-t-[1px] border-b-[1px] border-t-white border-b-white">
          <ul className="flex flex-row">
            <li>
              <Link to="about-us" className="px-5 hover:text-gray-400">
                O nas
              </Link>
            </li>
            <li>
              <Link to="products" className="px-5 hover:text-gray-400">
                Produkty
              </Link>
            </li>
            <li>
              <Link to="contact" className="px-5 hover:text-gray-400">
                Kontakt
              </Link>
            </li>
            <li>
              <Link to="about-us" className="px-5 hover:text-gray-400">
                Warunki użytkowania
              </Link>
            </li>
            <li>
              <Link to="about-us" className="px-5 hover:text-gray-400">
                Polityka prywatności
              </Link>
            </li>
          </ul>
        </nav>
        <p className="mt-4">
          © 2023, EcoBazarek Store Powered By Domino, App icons by{" "}
          <a
            className="underline"
            href="https://icons8.com/icon/set/food/color"
            target="_blank"
            rel="noopener noreferer"
          >
            icons8
          </a>
        </p>
      </section>
    </footer>
  );
};
