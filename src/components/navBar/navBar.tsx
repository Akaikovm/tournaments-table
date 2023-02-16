import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavbarItem from "./navBar-item";
import styled from "styled-components";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const setExpandedToFalse = () => setExpanded(false);

  interface NavigationProps {
    expanded: boolean;
  }

  const Navigation = styled.div<NavigationProps>``;
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-red-500">
        PGG's Tournament Series.
      </h1>
      <Navigation expanded={expanded} className="hidden md:flex">
        <NavbarItem label="Home" to="/" onClick={setExpandedToFalse} />
        <NavbarItem
          label="Tournaments"
          to="/tournaments-table"
          onClick={setExpandedToFalse}
        />
        <NavbarItem label="Titles" to="/titles" onClick={setExpandedToFalse} />
        <NavbarItem
          label="Standings"
          to="/standings"
          onClick={setExpandedToFalse}
        />
      </Navigation>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10 ml-2"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-red-500 m-4">
          PGG's Tournament Series
        </h1>
        <Navigation expanded={expanded}>
          <NavbarItem label="Home" to="/" onClick={setExpandedToFalse} />
          <NavbarItem
            label="Tournaments"
            to="/tournaments-table"
            onClick={setExpandedToFalse}
          />
          <NavbarItem
            label="Titles"
            to="/titles"
            onClick={setExpandedToFalse}
          />
          <NavbarItem
            label="Standings"
            to="/standings"
            onClick={setExpandedToFalse}
          />
        </Navigation>
      </ul>
    </div>
  );
};

export default Navbar;
