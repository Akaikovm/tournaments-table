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

  const iconStyle = { color: "white", fontSize: "1.5em" };

  return (
    <nav className="flex justify-between items-center h-24 px-4  bg-gray-900">
      {/* Desktop Nav */}
      {!nav && (
        <>
          <h1 className="w-full text-3xl font-bold text-red-700">
            PGG's Tournament Series.
          </h1>
          <Navigation expanded={expanded} className="hidden md:flex">
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
        </>
      )}
      <div onClick={handleNav} className="block md:hidden">
        {!nav && <AiOutlineMenu style={iconStyle} size={20} />}
      </div>
      {/* Responsive Nav */}
      <ul
        className={
          nav
            ? "fixed left-0 top-0  w-[70%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10 pl-2"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <div onClick={handleNav} className="block md:hidden mt-4">
          {nav ? (
            <AiOutlineClose style={iconStyle} size={20} />
          ) : (
            <AiOutlineMenu style={iconStyle} size={20} />
          )}
        </div>
        <h1 className="w-full text-3xl font-bold text-red-700 m-4">
          PGG's Tournament Series
        </h1>
        <Navigation expanded={expanded}>
          <NavbarItem
            label="Home"
            to="/"
            onClick={() => {
              setExpandedToFalse();
              setNav(false);
            }}
          />
          <NavbarItem
            label="Tournaments"
            to="/tournaments-table"
            onClick={() => {
              setExpandedToFalse();
              setNav(false);
            }}
          />
          <NavbarItem
            label="Titles"
            to="/titles"
            onClick={() => {
              setExpandedToFalse();
              setNav(false);
            }}
          />
          <NavbarItem
            label="Standings"
            to="/standings"
            onClick={() => {
              setExpandedToFalse();
              setNav(false);
            }}
          />
        </Navigation>
      </ul>
    </nav>
  );
};

export default Navbar;
