import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex gap-10 p-5 items-center">
            <Link to={"/"}>Home</Link>
            <Link to={"/users"}>Users</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>
        </nav>
      </header>
    </div>
  );
};
