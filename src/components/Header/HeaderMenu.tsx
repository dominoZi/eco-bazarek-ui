import {
  UserIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export const HeaderMenu = () => {
  return (
    <div className="flex flex-row mx-4">
      <button className="flex items-center justify-center w-[48px] h-[48px] mr-4">
        <MagnifyingGlassIcon className="h-6 w-6 text-white" />
      </button>
      <button className="flex items-center justify-center w-[48px] h-[48px] mr-4">
        <SparklesIcon className="h-6 w-6 text-white" />
      </button>
      <Link
        className="flex items-center justify-center w-[48px] h-[48px]"
        to="/profile"
      >
        <UserIcon className="h-6 w-6 text-white" />
      </Link>
    </div>
  );
};
