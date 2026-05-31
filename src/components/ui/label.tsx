import React from "react";
import { calculateClassName } from "./titleBar";

type Ref = HTMLLabelElement;

interface LabelProps extends React.ComponentPropsWithoutRef<"label"> {
  optional?: boolean;
  children: React.ReactNode;
  spacing?: "tight" | "normal";
  font?: "normal" | "semibold";
}

export const Label = React.forwardRef<Ref, LabelProps>(function Label(
  {
    children,
    spacing,
    optional,
    font = "semibold",
    className,
    ...props
  }: LabelProps,
  ref
) {
  const base = "block text-xs uppercase tracking-[0.12em] text-white/70";

  const spacingStyle: { [key: string]: string } = {
    tight: "mb-1",
    normal: "mb-2",
  };

  const fontStyle: { [key: string]: string } = {
    normal: "font-medium",
    semibold: "font-semibold",
  };

  return (
    <label
      ref={ref}
      className={calculateClassName([
        base,
        spacingStyle[spacing ?? "normal"],
        fontStyle[font],
        className,
      ])}
      {...props}
    >
      {children}
      {optional && (
        <span className="ml-2 text-[10px] tracking-wide text-white/30">
          OPTIONAL
        </span>
      )}
    </label>
  );
});

Label.defaultProps = {
  spacing: "normal",
};
