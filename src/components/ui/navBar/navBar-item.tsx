import React from "react";
import { NavLink } from "react-router-dom";
import { calculateClassName } from "../titleBar";

interface NavbarItemProps {
  label: string;
  to: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  variant?: "desktop" | "mobile";
  end?: boolean;
}

const NavbarItem = ({
  label,
  to,
  onClick,
  variant = "desktop",
  end,
}: NavbarItemProps) => {
  const baseDesktop =
    "relative inline-flex items-center px-3.5 py-2 rounded-full text-sm font-medium text-white/70 transition-all duration-200 hover:text-white hover:bg-white/5";
  const baseMobile =
    "block px-4 py-3 rounded-2xl text-base font-medium text-white/80 transition-all duration-200 hover:text-white hover:bg-white/5";

  const activeDesktop =
    "text-white bg-white/10 border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_8px_24px_rgba(245,158,11,0.18)]";
  const activeMobile =
    "text-white bg-gradient-to-r from-amber-500/25 via-orange-500/15 to-rose-500/15 border border-white/10";

  const base = variant === "mobile" ? baseMobile : baseDesktop;
  const active = variant === "mobile" ? activeMobile : activeDesktop;

  return (
    <NavLink
      onClick={onClick}
      to={to}
      end={end}
      className={({ isActive }) =>
        calculateClassName(base, isActive ? active : "")
      }
    >
      {({ isActive }) => (
        <>
          {variant === "desktop" && isActive ? (
            <span className="mr-2 inline-flex h-1.5 w-1.5 rounded-full bg-brand-gradient" />
          ) : null}
          {label}
        </>
      )}
    </NavLink>
  );
};

export default NavbarItem;
