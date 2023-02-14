import React, { useState } from "react";
import NavbarItem from "./navBar-item";
import styled, { css } from "styled-components";

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
    @media (max-width: 1023px) {
      visibility: hidden;
      transform: scaleY(0);
      transform-origin: top;
      padding: 20px;
      ${css`bg-indigo-700`}
      left: 0;
      top: 64px;
      flex-direction: column;
      position: fixed;
      height: calc(100vh - 64px);
      width: 100vw;
      z-index: 2;
      ${(props) =>
        props.expanded &&
        css`
          visibility: visible;
          transform: scaleY(1);
        `};
    }
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
                className="items-center flex  ml-5"
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
