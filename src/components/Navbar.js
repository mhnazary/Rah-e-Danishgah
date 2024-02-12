import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="bg-violet-400 text-black h-16 flex justify-between px-10 items-center">
        <h1 className="header text-3xl">نکست وان کد</h1>
        <ul className="ul flex justify-evenly w-96">
          <li>
            <NavLink to="/">صفحه اصلی</NavLink>
          </li>
          <li>
            <NavLink to="/About">درباره ما</NavLink>
          </li>
          <li>
            <NavLink to="/Article">مقالات</NavLink>
          </li>
          <li>
            <NavLink to="/Panel">پنل</NavLink>
          </li>
          <li>
            <NavLink to="/Login">ورود</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
