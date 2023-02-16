import React from "react";
import { NavLink } from "react-router-dom";

let activeStyle = {
  textDecoration: "underline",
  backgroundColor: "#EF4444",
};

interface NavbarItemProps {
  label: string;
  to: string;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

const NavbarItem = ({ label, to, onClick }: NavbarItemProps) => {
  return (
    <div className="md:ml-8 flex">
      <NavLink
        onClick={onClick}
        // exact
        to={to}
        className="mb-1 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white hover:bg-red-500"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        {label}
      </NavLink>
    </div>
  );
};

export default NavbarItem;
