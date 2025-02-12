import { Link } from "react-router-dom";
import MenuDaisy from "./Menu";

export default function Navbar() {
  return (
    <div className="navbar bg-base-200 shadow-sm flex justify-between">
      <div>
        <button className="btn btn-ghost text-xl">
          <Link to="/">Silverlog</Link>
        </button>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
        <MenuDaisy />
      </div>
    </div>
  );
}
