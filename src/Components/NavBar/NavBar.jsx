import React from "react";
import Link from "./Link";

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
const NavBar = () => {
  return (
    <nav>
      <ul className="flex">
        {navigationData.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
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
    </nav>
  );
};

export default NavBar;
