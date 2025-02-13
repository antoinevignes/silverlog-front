import { IoFilm } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-neutral-content items-center p-4 z-[100]">
      <aside className="grid-flow-col items-center">
        <IoFilm className="text-4xl" />
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  );
}
