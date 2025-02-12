import { Link } from "react-router-dom";
import MenuDaisy from "./Menu";
import SearchForm from "../SearchForm";
import { IoFilm } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="navbar bg-base-200 shadow-sm flex justify-between z-[100]">
      <div>
        <button className="btn btn-ghost text-xl">
          <Link to="/" className="flex items-center gap-2">
            <IoFilm className="text-2xl" />
            Silverlog
          </Link>
        </button>
      </div>
      <div className="flex gap-2">
        <SearchForm />
        <MenuDaisy />
      </div>
    </div>
  );
}
