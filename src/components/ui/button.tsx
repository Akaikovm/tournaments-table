/* eslint-disable */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { calculateClassName } from "./titleBar";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "danger" | "ghost";
  loading?: boolean;
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
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
      size = "md",
      ...props
    },
    ref
  ) => {
    const base =
      "relative inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 ease-out select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60";

    const sizes: Record<string, string> = {
      sm: "px-3 py-1.5 text-xs",
      md: "px-4 py-2.5 text-sm",
      lg: "px-5 py-3 text-base",
    };

    const styles: Record<string, string> = {
      primary:
        "text-white shadow-[0_8px_30px_rgba(245,158,11,0.35)] hover:shadow-[0_12px_36px_rgba(245,158,11,0.55)] [background-image:linear-gradient(135deg,#FBBF24_0%,#F97316_50%,#E11D48_100%)] [background-size:200%_200%] hover:[background-position:100%_50%]",
      secondary:
        "text-white/95 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-md",
      danger:
        "text-white bg-rose-500/90 hover:bg-rose-500 shadow-[0_8px_24px_rgba(244,63,94,0.35)] border border-rose-400/40",
      ghost:
        "text-white/80 bg-transparent hover:bg-white/5 hover:text-white",
    };

    const isDisabled = disabled || loading;
    const widthCls = fullWidth ? "w-full" : "";

    return (
      <button
        ref={ref}
        {...props}
        disabled={isDisabled}
        className={calculateClassName([
          base,
          sizes[size],
          styles[props.variant],
          widthCls,
          className,
          isDisabled ? disabledClassName : "",
        ])}
      >
        {loading ? (
          <span className="inline-flex items-center gap-2">
            <FontAwesomeIcon icon={faCircleNotch} spin />
            <span>Loading...</span>
          </span>
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
