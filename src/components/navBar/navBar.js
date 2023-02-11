import React, { useState } from "react";
import NavbarItem from "./navBar-item";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const setExpandedToFalse = () => setExpanded(false);

  return (
    <div>
      <nav className="bg-gray-700">
        <div>
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center w-full">
              <div className="flex w-full lg:w-auto justify-between"></div>
              <div expanded={expanded} className="items-center flex  ml-5">
                <NavbarItem label="Home" to="/" onClick={setExpandedToFalse} />
                <NavbarItem
                  label="Tournaments"
                  to="/tournaments"
                  onClick={setExpandedToFalse}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
