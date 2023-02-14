import React, { useState } from "react";
import NavbarItem from "./navBar-item";
import styled from "styled-components";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const setExpandedToFalse = () => setExpanded(false);

  interface NavigationProps {
    expanded: boolean;
  }

  const Navigation = styled.div<NavigationProps>`
    transition: transform 0.2s ease-in-out;
    display: flex;
    width: 100%;
  `;

  return (
    <div>
      <nav className="bg-gray-700">
        <div>
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center w-full">
              <div className="flex w-full lg:w-auto justify-between"></div>
              <Navigation
                expanded={expanded}
                className="items-center flex ml-5"
              >
                <NavbarItem label="Home" to="/" onClick={setExpandedToFalse} />
                <NavbarItem
                  label="Tournaments"
                  to="/tournaments"
                  onClick={setExpandedToFalse}
                />
                <NavbarItem
                  label="Titles"
                  to="/titles"
                  onClick={setExpandedToFalse}
                />
              </Navigation>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
