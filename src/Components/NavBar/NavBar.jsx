import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About Us",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
  {
    id: 5,
    name: "Blog",
    path: "/blog",
  },
];
const Links = navigationData.map((route) => (
  <Link key={route.id} route={route}></Link>
));
const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between mx-8 ">
      <span
        className="flex"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? (
          <X className="lg:hidden"></X>
        ) : (
          <Menu className="lg:hidden"></Menu>
        )}
        <ul
          className={`lg:hidden text-black duration-1000 absolute ${
            open ? "top-6" : "-top-40"
          } bg-amber-200`}
        >
          {Links}
        </ul>
        <h3 className="ml-4">My NavBar</h3>
      </span>
      <ul className="lg:flex hidden">{Links}</ul>
      {/* <ul className="flex">
        <li className="mr-10">
          <a href="">Home</a>
        </li>
        <li className="mr-10">
          <a href="">About</a>
        </li>
        <li className="mr-10">
          <a href="">Blog</a>
        </li>
      </ul> */}
      <button className="btn">Sing in</button>
    </nav>
  );
};

export default NavBar;
