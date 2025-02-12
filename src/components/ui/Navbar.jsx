import { Link } from "react-router-dom";
import MenuDaisy from "./Menu";
import SearchForm from "../SearchForm";

export default function Navbar() {
  return (
    <div className="navbar bg-base-200 shadow-sm flex justify-between">
      <div>
        <button className="btn btn-ghost text-xl">
          <Link to="/">Silverlog</Link>
        </button>
      </div>
      <div className="flex gap-2">
        <SearchForm />
        <MenuDaisy />
      </div>
    </div>
  );
}
