/* eslint-disable */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { calculateClassName } from "./titleBar";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "danger";
  loading?: boolean;
  fullWidth?: boolean;
  disabledClassName?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      loading = false,
      disabled,
      fullWidth,
      className,
      disabledClassName,
      ...props
    },
    ref
  ) => {
    const button = `px-4 py-2 font-semibold border border-transparent rounded-lg shadow-md focus:outline-none focus:border-black`;

    const styles = {
      primary: `font-semibold text-white bg-gray-700`,
      secondary: `text-red-500 bg-black border-black`,
      danger: `bg-red-700 text-white`,
    };

    disabled = disabled || loading;

    const disabledColor = disabled
      ? props.variant === "primary"
        ? `bg-gray-700`
        : props.variant === "secondary"
        ? `bg-white`
        : `bg-red-700`
      : ``;

    const withFullWidth = fullWidth ? `w-full` : ``;

    return (
      <button
        ref={ref}
        {...props}
        disabled={disabled}
        className={calculateClassName([
          button,
          styles[props.variant],
          disabledColor,
          withFullWidth,
          className,
          disabled ? disabledClassName : "",
        ])}
      >
        {loading ? (
          <div style={{ fontSize: "1em" }}>
            <FontAwesomeIcon icon={faCircleNotch} spin />
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.defaultProps = {
  variant: "secondary",
};
